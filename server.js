const http = require('http')
const express = require('express')
const { RSA_NO_PADDING } = require('constants')

const hostname = '127.0.01'
const port = 3000

const app = express()

const server = http.createServer(app)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/pancake', (req, res) => {
    res.send('<h1>Hello Pancake<h1>')
})

app.get('*', (req, res) => {
    res.status(404)
    res.send('Page not Found')
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
})