import http from 'http';

const hostname = 'localhost';
const port = 8081;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain; charset=utf-8')
    res.end('olá mundo!')
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})