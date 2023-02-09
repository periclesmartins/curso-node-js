const http = require('http')

http.createServer((request,response)=>{
    response.writeHead(200,{
        'Contente-Type':'text/plain'
    })
    response.write('CFB Cursos\nCurso de Node.js')
    response.end()
}).listen(1337)

/*
A primeira linha importa a biblioteca "http" do Node.js. Em seguida, a função "createServer" é chamada para criar o servidor. Essa função recebe uma função callback com dois argumentos, "request" e "response".

A função callback configura a resposta HTTP usando o método "writeHead". Aqui, definimos o código de status HTTP como 200 (OK) e o tipo de conteúdo como "text/plain".

Em seguida, o método "write" é usado para escrever uma string na resposta HTTP. No caso, escrevemos "CFB Cursos\nCurso de Node.js".

Por fim, o método "end" é chamado para indicar o final da resposta HTTP.

Por fim, o método "listen" é chamado para especificar que o servidor deve escutar na porta 1337.

Este é um exemplo básico de como usar o módulo "http" do Node.js para criar um servidor HTTP. É uma boa base para construir aplicações mais avançadas!
*/