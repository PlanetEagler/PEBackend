const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', function connection(ws) {
    console.log('Connection Recived');
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });
    
    ws.send('something');
});