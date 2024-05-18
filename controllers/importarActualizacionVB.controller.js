const bodegas = require("../database/bodegas.json");
const Bodega = require("../services/bodega");

class ControladorImportarActualizacionVB {
  constructor() {
    this.bodegas = bodegas.map((bodega) => {
      return new Bodega(
        bodega.id,
        bodega.nombre,
        bodega.descripcion,
        bodega.historias,
        bodega.periodoActualizacion,
        new Date(bodega.tieneActualizacion),
        bodega.imgLogoBodega
      );
    });

    console.log(this.bodegas);
  }

  // Operaciones/Metodos Privados
  #buscarBodegasConActualizacion() {
    this.bodegasConActualizacion = [];
    this.bodegas.forEach((bodega) => {
      if (bodega.tieneActualizacion()) {
        this.bodegasConActualizacion.push(bodega.getName());
      }
    });
    return this.bodegasConActualizacion;
  }

  // Operaciones/Metodos Publicas
  opcionImportarActualizacionVentana(req, res) {
    res.status(200).json(this.#buscarBodegasConActualizacion());
  }

  tomarBodegasSeleccionadas() {}
}

module.exports = ControladorImportarActualizacionVB;
