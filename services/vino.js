class Vino {
    constructor(añada, imgEtiqueta, bodega, nombre, notaDeCata, precio, varietal, maridaje) {
        this.añada = añada;
        this.imgEtiqueta = imgEtiqueta;
        this.bodega = bodega;
        this.nombre = nombre;
        this.notaDeCata = notaDeCata;
        this.precio = precio;
        this.varietal = varietal;
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
}