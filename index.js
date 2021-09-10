// require your server and launch it
//will work on tomorrow, I do not understand this project at all..
const server = require('./api/server.js')

const port = 5000

server.listen(port, () => {
    console.log('listening on', port)
})