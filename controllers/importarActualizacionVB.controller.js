const bodegas = require("../database/bodegas.json");
const vinos = require("../database/vinos.json");
const Bodega = require("../services/bodega");
const Vino = require("../services/vino");

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

      return new Vino(
        vino.añada,
        vino.imgEtiqueta,
        buscarBodega(vino.bodega, this.bodegas),
        vino.nombre,
        vino.notaDeCata,
        vino.precio,
        vino.varietal,
        vino.maridaje
      );
    });

    console.log(this.vinos);
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

  #actualizarDatosBodega() {}

  // Operaciones/Metodos Publicas
  opcionImportarActualizacionVentana(req, res) {
    res.status(200).json(this.#buscarBodegasConActualizacion());
  }

  tomarBodegasSeleccionadas(req, res) {
    this.bodegasSeleccionadas = req.body.bodegasSeleccionadas;
    if (this.#verificarSeleccionUnica()) {
      this.#actualizarDatosBodega();
    } else {
      res.status(500).json({
        error: "Este flujo del caso de uso no esta implementado.",
      });
    }
  }
}

module.exports = ControladorImportarActualizacionVB;
