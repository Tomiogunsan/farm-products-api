const EventEmitter = require('events')
const http = require('http')

const myEmitter = new EventEmitter()

myEmitter.on('newSale', () => {
    console.log('There was a new sale!')
})

myEmitter.emit()

const server = http.createServer()