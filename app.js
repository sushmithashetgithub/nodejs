const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('message', 'utf8', (err, data) => {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Message Form</title></head>');
      res.write('<body>');
      if (data) {
        const messages = data.split('\n').filter(Boolean).reverse();
        messages.forEach(msg => {
          res.write(`<p>${msg}</p>`);
        });
      }
      res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
      res.write('</body></html>');
      res.end();
    });
  } else if (req.url === '/message' && req.method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1].replace(/\+/g, ' ');
      fs.appendFile('message', message + '\n', err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
      });
    });
  } else {
    res.statusCode = 404;
    res.end('Page Not Found');
  }
});

server.listen(3000);
