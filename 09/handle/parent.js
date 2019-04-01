var clild = require('child_process').fork(__dirname + '/child.js')

var server= require('net').createServer();
server.on('connection', function(socket) {
  socket.end('handled by parent\n')
})

server.listen(1337, function() {
  clild.send('server', server)
})
