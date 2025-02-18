const http = require('http');
const stream = require('stream');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    // Use a stream to handle large requests
    let data = '';
    req.on('data', chunk => {
      data += chunk
      if (data.length > 1e6) { //1MB
        req.destroy(); // destroy the request if too large
      }
    });
    req.on('end', () => {
      console.log('data', data);
      res.writeHead(200);
      res.end('Hello World!');
    });
  } else {
    res.writeHead(405);
    res.end();
  }
}).listen(3000);

console.log('Server listening on port 3000');