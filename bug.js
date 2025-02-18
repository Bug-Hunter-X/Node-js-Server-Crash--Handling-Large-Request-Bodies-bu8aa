const http = require('http');

const server = http.createServer((req, res) => {
  // This line will cause an error if the request is too large
  const body = [];
  req.on('data', chunk => body.push(chunk));
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    // Process the request body
    res.writeHead(200);
    res.end('Hello World!');
  });
}).listen(3000);

console.log('Server listening on port 3000');