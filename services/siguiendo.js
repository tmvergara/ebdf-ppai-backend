class Siguiendo {
    constructor(fechaInicio, fechaFin, bodega, enofilo) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.bodega = bodega;
        this.enofilo = enofilo;
    }
    // verifica si el enófilo sigue a una bodega
    sosDeBodega(bodega) { 
        if (this.bodega === bodega) {
            return true;
        } 
        return false;
    }
}   

module.exports = Siguiendo;