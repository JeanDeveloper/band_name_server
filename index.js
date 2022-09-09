const express = require('express');
const path = require('path');
require('dotenv').config();

//App de express
const app = express();

// Node Server
const server = require('http').createServer();
const io = require('socket.io')(server);

// Mensajes de Sockets
io.on('connection', client => {

    // client.on('event', data =>{
    //     console.log('escuchando un evento')
    // })

    console.log('Cliente conectado');

    client.on('disconnect', ()=>{
        console.log('Cliente desconectado');
    })

})

//path publico
const publicPath = path.resolve( __dirname, 'public' );

app.use( express.static( publicPath ) );

server.listen(process.env.PORT, ( err ) =>{

    if( err ) throw new Error(err);

    console.log('Servidor corriendo en el puerto!!!', process.env.PORT);

})

// server.listen(3000);
