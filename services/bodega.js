class Bodega {
  constructor(
    id,
    nombre,
    descripcion,
    historias,
    periodoActualziacion,
    imgLogoBodega,
    coordenadas
  ) {
    (this.id = id),
      (this.nombre = nombre),
      (this.descripcion = descripcion),
      (this.historias = historias),
      (this.periodoActualziacion = periodoActualziacion), // dias
      (this.ultimaActualizacion = null), // fecha
      (this.imgLogoBodega = imgLogoBodega),
      (this.coordenadas = coordenadas);
  }

  getNombre() {
    return this.nombre;
  }

  tieneActualizacion() {
    /* Se fija si la fecha de la ultima actualizacion + el periodo de actualizacion 
    es mayor a la fecha actual, lo que siginifca que haya actualizaciones pendientes. */
    const fechaVencimiento = new Date(this.ultimaActualizacion);
    const fechaActual = new Date();
    fechaVencimiento.setDate(
      fechaVencimiento.getDate() + this.periodoActualziacion
    );
    if (this.ultimaActualizacion === null) {
      return true;
    }

    if (fechaVencimiento >= fechaActual) {
      return true;
    }

    return false;
  }
}
