const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('SUCCESS! The Upsun deployment and billing are working perfectly.\n');
});

// Upsun automatically provides the port dynamically
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});