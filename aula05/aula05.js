const http = require('http')
const fs = require('fs')
const porta = process.env.PORT 

const server=http.createServer((req,res)=>{
    fs.readFile('index.html',(err,arquivo)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

server.listen(porta || 3000,()=>{console.log('Servidor rodando')})

/*
Esse código é um exemplo de servidor HTTP simples feito com Node.js. O objetivo é ler um arquivo HTML chamado "index.html" e retorná-lo como resposta a requisições HTTP.

A primeira linha carrega o módulo 'http' do Node.js, que fornece as ferramentas necessárias para criar um servidor HTTP. A segunda linha carrega o módulo 'fs' (sistema de arquivos), que permite ler o conteúdo de arquivos em disco. A terceira linha define a porta na qual o servidor deve escutar, se existir uma variável de ambiente chamada "PORT", senão será 3000.

Em seguida, é criado o servidor HTTP usando a função "http.createServer()", que recebe uma função como argumento que será chamada sempre que uma requisição for feita ao servidor. Essa função le o conteúdo do arquivo "index.html" usando a função "fs.readFile()". Se a leitura foi bem-sucedida, o cabeçalho da resposta HTTP é definido com o código de status "200" (OK) e o tipo de conteúdo "text/html". O corpo da resposta é preenchido com o conteúdo do arquivo HTML. Por fim, a função "res.end()" é chamada para indicar que a resposta está completa.

Por fim, o servidor é iniciado usando o método "server.listen()", que especifica a porta na qual o servidor deve escutar e uma função de callback que será executada quando o servidor estiver pronto para receber requisições. A função de callback apenas exibe uma mensagem no console informando que o servidor está rodando.
*/