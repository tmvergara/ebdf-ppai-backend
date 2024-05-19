class InterfazNotificacionesPush {
    constructor() {
        this.seguidores = [];
    }
   notificarNovedades(seguidores) {
        console.log('Se envian notificaciones a los siguientes usuarios: ', seguidores);
    }
}

module.exports = InterfazNotificacionesPush;