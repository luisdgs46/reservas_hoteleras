class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    getInfo() {
        return `Nombre: ${this.nombre}, Email: ${this.email}`;
    }
}

module.exports = Usuario;