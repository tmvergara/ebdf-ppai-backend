const express = require("express");
const ControladorImportarActualizacionVB = require("../controllers/importarActualizacionVB.controller");

class PantallaImportarActualizacionVBRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new ControladorImportarActualizacionVB();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(
      "/actualizar-vinos-bodega/bodegas-con-actualizacion",
      (req, res) => {
        setTimeout(() => {
          this.controller.opcionImportarActualizacionVentana(req, res);
        }, 1000); // Se agrega el timeout con finalidad de probar la animacion del loader en Frontend.
      }
    );

    this.router.post(
      "/actualizar-vinos-bodega/actualizar-bodegas",
      (req, res) => {
        this.controller.tomarBodegasSeleccionadas(req, res);
      }
    );
  }

  getRouter() {
    return this.router;
  }
}

module.exports = PantallaImportarActualizacionVBRouter;
