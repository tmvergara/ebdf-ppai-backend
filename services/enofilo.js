import Usuario from './usuario.js';
import Siguiendo from './siguiendo.js';

class Enofilo {
    // Constructor de la clase
    constructor() {
        this.apellido = apellido,
        this.nombre = nombre,
        this.imagenPerfil = imagenPerfil,
        this.usuario = usuario;
        this.amigo = amigo
    }

    // Método para obtener el nombre del usuario
    getNombreUsuario() {
        return Usuario.getNombre();
    }

    // Método para verificar si el usuario sigue a una bodega
    sigueABodega(bodegas) {
        for (let i = 0; i < bodegas.length; i++) {
            if (Siguiendo.sosDeBodega(bodegas[i])) {
                return true;
            }
            return false;
        }
    }

}

module.exports = Enofilo;