const http = require('http')

http.createServer((request,response)=>{
    response.writeHead(200,{
        'Contente-Type':'text/plain'
    })
    response.write('CFB Cursos\nCurso de Node.js')
    response.end()
}).listen(1337)