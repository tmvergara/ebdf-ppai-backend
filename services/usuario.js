//clase usuario
class Usuario {
    constructor(nombre, password) {
        this.nombre = nombre;
        this.password = password;
    }
    //metodo get 
    getNombre() {
        return this.nombre;
    }
}

module.exports = Usuario;
