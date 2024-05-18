const express = require("express");
const ControladorImportarActualizacionVB = require("../controllers/importarActualizacionVB.controller");
const router = express.Router();

// Handle the /users endpoint
router.get("/actualizar-vinos-bodega/bodegas-con-actualizacion", (req, res) => {
  var controller = new ControladorImportarActualizacionVB();
  controller.opcionImportarActualizacionVentana(req, res);
});

// Add more routes for the /users endpoint as needed

module.exports = router;
