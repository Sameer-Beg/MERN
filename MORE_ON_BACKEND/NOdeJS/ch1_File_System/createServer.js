const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    res.end('Hello from the other side');
});

// Define port
const port = 3000;

// Start listening on that port
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
