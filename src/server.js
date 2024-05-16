const express = require('express');

class Server {
    constructor(){
        this.app = express();
        this.port = 3000;
        this.server = require('http').createServer(this.app);
        
        this.paths = {
            users: '/api/user'
        }

        this.middlewares();
        this.routes();   
    }
    
    middlewares() {
        this.app.use( express.json() )
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.paths.users, require('../src/routes/user.routes.js'))
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto:', this.port);
        })
    }
}

module.exports = Server