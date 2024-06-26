const bodegas = require("../database/bodegas.json");
const vinos = require("../database/vinos.json");
const actualizacionBodegas = require("../database/actualizacionesBodegas/actualizacionBodegas.json");
const enofilos = require("../database/enofilos.json");
const Bodega = require("../services/bodega");
const Vino = require("../services/vino");
const Maridaje = require("../services/maridaje");
const Enofilo = require("../services/enofilo");
const Siguiendo = require("../services/siguiendo");
const Usuario = require("../services/usuario");
const InterfazNotificacionesPush = require("../services/interfazNotificacionesPush.boundary");

class ControladorImportarActualizacionVB {
  constructor() {
    this.bodegas = bodegas.map((bodega) => {
      return new Bodega(
        bodega.id,
        bodega.nombre,
        bodega.descripcion,
        bodega.historias,
        bodega.periodoActualizacion,
        new Date(bodega.ultimaActualizacion),
        bodega.imgLogoBodega,
        bodega.coordenadas,
        bodega.sitioWeb || ""
      );
    });

    this.vinos = vinos.map((vino) => {
      function buscarBodega(nombreBodega, bodegas) {
        const bodega = bodegas.find((bodega) => {
          if (bodega.getNombre() == nombreBodega) {
            return true;
          }
        });
        if (bodega !== undefined) {
          return bodega;
        }
        console.log("La bodega no existe...");
        return null;
      }

      this.enofilos = enofilos.map((enofilo) => {
        return new Enofilo(
          enofilo.apellido,
          enofilo.nombre,
          enofilo.imagenPerfil,
          new Usuario(enofilo.usuario, null),
          new Siguiendo(enofilo.siguiendo.fechaInicio, null, enofilo.siguiendo.bodega, null)
        );
      });

      const nuevoVino = new Vino(
        vino.añada,
        vino.imgEtiqueta,
        buscarBodega(vino.bodega, this.bodegas),
        vino.nombre,
        vino.notaDeCata,
        vino.precio,
        new Maridaje(vino.maridaje.nombre, vino.maridaje.descripcion)
      );

      nuevoVino.crearVarietal(vino.varietal);
      return nuevoVino;
    });
  }

  // Operaciones/Metodos Privados
  #buscarBodegasConActualizacion() {
    this.bodegasConActualizacion = [];
    this.bodegas.forEach((bodega) => {
      if (bodega.tieneActualizacion()) {
        this.bodegasConActualizacion.push({
          id: bodega.getNombre(), // Campo necesario para la correcta identificacion y renderizacion de listas en el react.
          nombre: bodega.getNombre(),
          coordenadas: bodega.getCoordenadas(),
          sitioWeb: bodega.getSitioWeb(),
          imgLogoBodega: bodega.getImgLogoBodega(),
        });
      }
    });
    return this.bodegasConActualizacion;
  }

  #verificarSeleccionUnica() {
    if (this.bodegasSeleccionadas.length == 1) {
      return true;
    }
    return false;
  }

  #actualizarVinoExistente(vino, vinoActualizacion) {
    vino.actualizarDatosVino(vinoActualizacion);
  }

  #crearVino(vinoActualizacion) {
    const nuevoVino = new Vino(
      vinoActualizacion.añada,
      vinoActualizacion.imgEtiqueta,
      vinoActualizacion.bodega,
      vinoActualizacion.nombre,
      vinoActualizacion.notaDeCata,
      vinoActualizacion.precio,
      null
    );

    nuevoVino.crearVarietal(vinoActualizacion.varietal);
    this.vinos.push(nuevoVino);
    return nuevoVino;
  }



  #actualizarDatosBodega(nombreBodega) {
    /* Aca se supone que se hace la llamada a la API de la bodega seleccionada, 
    como eso excede el alcance de esta impelmentacion, nosotros metimos todas
    las actualizaciones en un solo archivo y el siguiente codigo busca las mismas
    segun el nombre de la bodega: enfatizamos ACA SE DEBERIA EJECUTAR LA API CALL A LA BODEGA ESPECIFICA.*/
    const actualizaciones = actualizacionBodegas.find((bodega) => {
      const nombreBodegaActualizacion = Object.keys(bodega)[0]; // Obtener el nombre de la bodega
      return nombreBodegaActualizacion === nombreBodega;
    });

    const resumenActualizacion = [];

    actualizaciones[nombreBodega].forEach((actualizacion) => {
      const vino = this.vinos.find(
        (vino) => vino.nombre === actualizacion.nombre
      );

      if (vino) {
        // Es actualizacion
        this.#actualizarVinoExistente(vino, actualizacion);
        resumenActualizacion.push({
          nombre: actualizacion.nombre,
          precio: actualizacion.precio,
          notaDeCata: actualizacion.notaDeCata,
          imgEtiqueta: vino.imgEtiqueta,
          varietal: actualizacion.varietal.tipoUva.nombre,
          tipoUpdate: "actualizacion",
        });
      } else {
        // Es creacion
        const nuevoVino = this.#crearVino(actualizacion);
        resumenActualizacion.push({
          nombre: nuevoVino.nombre,
          precio: nuevoVino.precio,
          notaDeCata: nuevoVino.notaDeCata,
          imgEtiqueta: nuevoVino.imgEtiqueta,
          varietal: nuevoVino.varietal.tipoUva.nombre,
          tipoUpdate: "creacion",
        });
      }
    });
    const bodegaActualizada = this.bodegas.find((bodega) => {
      return bodega.getNombre() === nombreBodega;
    });
    bodegaActualizada.actualizarFechaUltimaActualizacion();
    return [{ ...bodegaActualizada, updates: resumenActualizacion }];
  }

  #buscarSeguidoresDeBodega(nombreBodega) {
    const seguidores = [];
    this.enofilos.forEach((enofilo) => {
      if (enofilo.sigueABodega(nombreBodega)) {
        seguidores.push(enofilo.getNombreUsuario());
      }
    });
    const notificaciones = new InterfazNotificacionesPush();
    notificaciones.notificarNovedades(seguidores);
  }

  // Operaciones/Metodos Publicas
  opcionImportarActualizacionVentana(req, res) {
    res.status(200).json(this.#buscarBodegasConActualizacion());
  }

  tomarBodegasSeleccionadas(req, res) {
    this.bodegasSeleccionadas = req.body.bodegasSeleccionadas;
    if (this.#verificarSeleccionUnica()) {
      const resumenActualizacion = this.#actualizarDatosBodega(
        this.bodegasSeleccionadas[0]
      );
      res.status(200).json(resumenActualizacion);
      this.#buscarSeguidoresDeBodega(this.bodegasSeleccionadas[0]);
    } else {
      res.status(500).json({
        error: "Este flujo del caso de uso no esta implementado.",
      });
    }
  }
}

module.exports = ControladorImportarActualizacionVB;
