const express = require('express');
const UsuarioController = require('../controllers/controller');

const router = express.Router();

router.post("/usuario", UsuarioController.userRegister)

module.exports = router;


// http:localhost:3000/api/usuario