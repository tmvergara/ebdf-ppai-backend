class Bodega {
  constructor(
    id,
    nombre,
    descripcion,
    historias,
    periodoActualziacion,
    ultimaActualizacion = null,
    imgLogoBodega,
    coordenadas,
    sitioWeb
  ) {
    (this.id = id),
      (this.nombre = nombre),
      (this.descripcion = descripcion),
      (this.historias = historias),
      (this.periodoActualziacion = periodoActualziacion), // dias
      (this.ultimaActualizacion = ultimaActualizacion), // fecha
      (this.imgLogoBodega = imgLogoBodega),
      (this.coordenadas = coordenadas),
      (this.sitioWeb = sitioWeb);
  }

  getNombre() {
    return this.nombre;
  }

  getSitioWeb() {
    return this.sitioWeb;
  }

  getCoordenadas() {
    return this.coordenadas;
  }

  getImgLogoBodega() {
    return this.imgLogoBodega;
  }

  tieneActualizacion() {
    /* Se fija si la fecha de la ultima actualizacion + el periodo de actualizacion 
    es menor a la fecha actual, lo que siginifca que haya actualizaciones pendientes. */
    const fechaVencimiento = new Date(this.ultimaActualizacion);
    const fechaActual = new Date();
    fechaVencimiento.setMonth(
      fechaVencimiento.getMonth() + this.periodoActualziacion
    );

    console.log(this.getNombre());
    console.log(fechaVencimiento);
    if (this.ultimaActualizacion === null) {
      return true;
    }

    if (fechaVencimiento <= fechaActual) {
      return true;
    }
    return false;
  }
  actualizarFechaUltimaActualizacion() {
    this.ultimaActualizacion = new Date();
  }
}

module.exports = Bodega;
