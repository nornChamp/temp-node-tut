const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/home') {
        res.end('somes')
    }
    if(req.url === '/about') {
        res.end('about')
    }
    res.end(`There is no page name : ${req.url}`)
})

server.listen(5000)

