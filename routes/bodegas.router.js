const express = require("express");
const router = express.Router();

// Handle the /users endpoint
router.get("/actualizar-vinos-bodega/bodegas-con-actualizacion", (req, res) =>
  setTimeout(
    () =>
      res.json([
        {
          id: "7ab98f11-9b59-45d2-9d68-8fc452417f8c",
          nombre: "Bodega Argento",
          coordenadas: {
            latitud: "",
            longitud: "",
          },
          sitioWeb: "http://www.bodegaargento.com",
          imagenLogo:
            "https://www.bodegasdeargentina.org//wp-content/uploads/partners/47_446f6ba15350952b2c4f8c5ab4720504.jpg",
          pais: "Argentina", // Added pais attribute
        },
        {
          id: "3c25b42b-73b6-4dc7-b2d5-185d29e56fa7",
          nombre: "Bodega Jorge Giol",
          direccion: "Av. España 985 - 3°p Of. G",
          ciudad: "Mendoza",
          telefono: "54-261-4293029",
          sitioWeb: "",
          imagenLogo:
            "https://www.bodegasdeargentina.org//wp-content/uploads/partners/218_e5fa7b06da4cc025c478ec3a1cee4c53.jpg",
          checked: false,
          pais: "Argentina", // Added pais attribute
        },
        {
          id: "842e053f-84ef-4a35-8fe3-67d8b70f9d69",
          nombre: "Coface Argentina",
          direccion: "Avda. España 1340, Piso 13, Of. 13 - Edificio BUCI",
          ciudad: "Mendoza.",
          telefono: "+54 261 4230969",
          sitioWeb: "",
          imagenLogo:
            "https://www.bodegasdeargentina.org//wp-content/uploads/partners/208_199e50d97f24985567c5e83bfcd0680f.jpg",
          checked: false,
          pais: "Argentina", // Added pais attribute
        },
        {
          id: "15a38c2b-abb0-4670-a99b-2a6210b82e38",
          nombre: "Bodega Y Viñedos Renacer",
          direccion: "Brandsen 1863 - Perdriel - Luján de Cuyo",
          ciudad: "Mendoza",
          telefono: "+54 261 5244416",
          sitioWeb: "http://www.bodegarenacer.com.ar",
          imagenLogo:
            "https://www.bodegasdeargentina.org//wp-content/uploads/partners/167_bddfe4434b15fcef8d1dcc6b48aa867b.jpg",
          checked: false,
          pais: "Argentina", // Added pais attribute
        },
        {
          id: "db282f5e-ef32-497d-b37f-cfa9a64b7da7",
          nombre: "Bodega Finca Las Moras",
          direccion: "Valle de Pedernal 153,Ciudad de San Juan",
          ciudad: "San Juan",
          telefono: "264 546-3518",
          sitioWeb: "//fincalasmoras.com.ar",
          imagenLogo:
            "https://www.bodegasdeargentina.org//wp-content/uploads/partners/258_f33c872c0908b21aa70939dee7492567.jpg",
          checked: false,
          pais: "Argentina", // Added pais attribute
        },
        {
          id: "a405bae8-b22e-4fa6-891f-23f12502e92b",
          nombre: "Bodega Del Rio Elorza",
          direccion: "Elena de la Vega 281",
          ciudad: "Zapala - Prov. Neuquén",
          telefono: "0299-155079957",
          sitioWeb: "http://www.delrioelorza.com/",
          imagenLogo:
            "https://www.bodegasdeargentina.org//wp-content/uploads/partners/248_b255ff5787e12febdb775f835cebf46c.jpg",
          checked: false,
          pais: "Argentina", // Added pais attribute
        },
      ]),
    500
  )
);

// Add more routes for the /users endpoint as needed

module.exports = router;
