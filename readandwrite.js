const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Read messages from file named 'message'
        fs.readFile('message', 'utf8', (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Message Form</title></head>');
            res.write('<body>');

            // Display existing messages at top
            if (!err && data) {
                const messages = data.trim().split('\n');
                messages.forEach(msg => {
                    res.write(`<p>${msg}</p>`);
                });
            }

            // Form with input name="message"
            res.write(`
                <form action="/message" method="POST">
                    <label>Message:</label>
                    <input type="text" name="message"></input>
                    <button type="submit">Add</button>
                </form>
            `);

            res.write('</body></html>');
            res.end();
        });
    } else if (url === "/message" && method === "POST") {
        let body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const buffer = Buffer.concat(body);
            const formData = buffer.toString();
            const message = formData.split('=')[1].replace(/\+/g, ' ');

            // Read existing messages first
            fs.readFile('message', 'utf8', (err, data) => {
                let allMessages = '';
                if (!err && data) {
                    allMessages = `${message}\n${data}`; // add new message at top
                } else {
                    allMessages = `${message}\n`;
                }

                // Write updated messages back to file named 'message'
                fs.writeFile('message', allMessages, (err) => {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    res.end();
                });
            });
        });
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
});
