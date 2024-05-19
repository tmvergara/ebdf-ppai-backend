const express = require("express");
const ControladorImportarActualizacionVB = require("../controllers/importarActualizacionVB.controller");
const router = express.Router();

var controller = new ControladorImportarActualizacionVB();

// Handle the /users endpoint
router.get("/actualizar-vinos-bodega/bodegas-con-actualizacion", (req, res) => {
  controller.opcionImportarActualizacionVentana(req, res);
});

router.post("/actualizar-vinos-bodega/actualizar-bodegas", (req, res) => {
  controller.tomarBodegasSeleccionadas(req, res);
});

// Add more routes for the /users endpoint as needed

module.exports = router;
