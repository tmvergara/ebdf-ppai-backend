const Usuario = require('./usuario.js');
const Siguiendo = require('./siguiendo.js');

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
        return Usuario.getNombre();
    }

    // Método para verificar si el usuario sigue a una bodega
    sigueABodega(bodega) {
            if (Siguiendo.sosDeBodega(bodega)) {
                return true;
            }
            return false;
        }
    }

module.exports = Enofilo;