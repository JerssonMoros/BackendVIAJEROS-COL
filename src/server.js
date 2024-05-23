const express = require('express');
const dbConnection = require('../database/config.js');

class Server {
    constructor(){
        this.app = express();
        this.port = 3000;
        this.server = require('http').createServer(this.app);
        
        this.paths = {
            users: '/api/user',
            auth: '/api/auth',
            menu: '/api/menu'
        }

        this.connectDB();

        this.middlewares();

        this.routes();   

    }

    async connectDB() {
        await dbConnection();
    }
    
    middlewares() {
   
        this.app.use( express.json() )
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.paths.users, require('../src/routes/user.routes.js'))
        this.app.use( this.paths.auth, require('../src/routes/auth.routes.js'))
        this.app.use( this.paths.menu, require('../src/routes/menu.routes.js'))
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto:', this.port);
        })
    }
}

module.exports = Server