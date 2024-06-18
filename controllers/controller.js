const Usuario = require('../models/model');

class UsuarioController {

    static userRegister(req, res) {
        const usuario = new Usuario(req.body.nombre, req.body.email);
        res.send(`Usuario registrado: ${usuario.getInfo()}`);
    }
}

module.exports = UsuarioController;