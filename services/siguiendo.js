class Siguiendo {
    constructor(fechaInicio, fechaFin, bodega, enofilo) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.bodega = bodega;
        this.enofilo = enofilo;
    }
    sosBodega(bodega) { 
        if (this.bodega === bodega) {
            return true;
        } 
        return false;
    }
}   