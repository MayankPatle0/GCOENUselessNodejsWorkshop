const http = require('http')

hostname = "127.0.0.1"

port = 5500;
const server = http.createServer((req,res)=>{



    res.write("welcome on server")
    res.end()
})
server.listen(port,hostname, ()=>{
    console.log(`running : http://${hostname}:${port}/`)
})