const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json()) // middleware para procesar peticiones tipo JSON

//app.post('/usuario', UsuarioController.userRegister)
// 
app.use('/api', userRoutes)

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
})

// http:localhost:3000/api/usuario