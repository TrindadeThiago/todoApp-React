const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen({host:'0.0.0.0',port:port}, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server