const express = require('express')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.get('/helth-check', function (req, res) {
            res.send('Service running ok')
        }
        )
    }

    listen(){
        this.app.listen(this.port)
    }
}

module.exports = Server