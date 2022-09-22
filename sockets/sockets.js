const { io } = require('../index')


// Mensajes de Sockets
io.on('connection', client => {

    console.log( `Cliente Conectado`  );

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    })

    client.on('mensaje', (  payload  )=> {
        console.log('mensaje: ', payload);
        io.emit( 'mensaje', { saludo2: 'Hola cliente, soy el servidor' });
    })

})