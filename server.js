const http = require('http');
const app = require('./app');
const hostname = '127.0.0.1';
const port = 3003;

// Creating the server
const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });