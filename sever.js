const http = require('http');
const port = 6000 ;
const server = http.createServer();





server.listen(port,() => {
    console.log('server is running on ' + port );
})