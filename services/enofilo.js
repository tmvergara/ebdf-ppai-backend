const Usuario = require('./usuario.js');


class Enofilo {
    // Constructor de la clase
    constructor(apellido, nombre, imagenPerfil, usuario, siguiendo) {
        this.apellido = apellido,
        this.nombre = nombre,
        this.imagenPerfil = imagenPerfil,
        this.usuario = usuario;
        this.siguiendo = siguiendo
    }

    // Método para obtener el nombre del usuario
    getNombreUsuario() {
        return this.usuario.getNombre();
    }

    // Método para verificar si el usuario sigue a una bodega
    sigueABodega(bodega) {
            if (this.siguiendo.sosDeBodega(bodega)) {
                return true;
            }
            return false;
        }
    }

module.exports = Enofilo;