const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  
  if (req.url === '/home') {
    res.writeHead(200);
    res.end('<h1>Welcome home</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200);
    res.end('<h1>Welcome to About Us</h1>');
  } else if (req.url === '/node') {
    res.writeHead(200);
    res.end('<h1>Welcome to my Node Js project</h1>');
  } else {
    res.writeHead(404);
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
