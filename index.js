const http = require("http");
const fs = require("fs")
const path = require("path")

http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                throw  err
            }

            response.writeHead(200, {
                'Content-Type': 'text/html'
            })
            response.end(data)
        })
    }
    else if(request.url === '/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
            if (err) {
                throw  err
            }

            response.writeHead(200, {
                'Content-Type': 'text/html'
            })
            response.end(data)
        })
    }
}).listen(3000, () => {
    console.log('Server has been started...')
})