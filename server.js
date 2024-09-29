const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname,'newpage.html');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Server error');
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${8080}`);
});
