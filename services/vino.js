const TipoUva = require("./tipouva");
const Varietal = require("./varietal");

class Vino {
  constructor(
    añada,
    imgEtiqueta,
    bodega,
    nombre,
    notaDeCata,
    precio,
    maridaje
  ) {
    this.añada = añada;
    this.imgEtiqueta = imgEtiqueta;
    this.bodega = bodega;
    this.nombre = nombre;
    this.notaDeCata = notaDeCata;
    this.precio = precio;
    this.maridaje = maridaje;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  setPrecio(precio) {
    this.precio = precio;
  }
  setImagenEtiqueta(imgEtiqueta) {
    this.imgEtiqueta = imgEtiqueta;
  }
  setNotaDeCata(notaDeCata) {
    this.notaDeCata = notaDeCata;
  }

  crearVarietal(varietal) {
    this.varietal = new Varietal(
      varietal.descripcion,
      varietal.porcentajeComposicion,
      new TipoUva(varietal.tipoUva.nombre, varietal.tipoUva.descripcion)
    );
  }
}

module.exports = Vino;
