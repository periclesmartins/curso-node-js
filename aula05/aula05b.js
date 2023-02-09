const http = require('http')
const fs = require('fs')
const path = require('path')
const porta = process.env.PORT 

const server=http.createServer((req,res)=>{
  if (req.url.endsWith('.jpg') || req.url.endsWith('.jpeg') || req.url.endsWith('.png')) {
    const imagePath = path.join(__dirname, req.url)
    fs.readFile(imagePath, (err, image) => {
      if (err) {
        console.error(err)
        res.writeHead(500)
        return res.end(err.message)
      }
      res.writeHead(200, { 'Content-Type': 'image/jpeg' })
      return res.end(image, 'binary')
    })
  } else {
    fs.readFile('index.html',(err,arquivo)=>{
      res.writeHead(200,{'Content-Type':'text/html'})
      res.write(arquivo)
      return res.end()
    })
  }
})

server.listen(porta || 3000,()=>{console.log('Servidor rodando')})

/*
Este código é um servidor web básico que usa Node.js, com as bibliotecas http, fs e path. Ele usa http.createServer para criar um servidor HTTP que pode lidar com requisições da web.

Ao receber uma requisição, o servidor verifica se a URL da requisição termina com '.jpg', '.jpeg' ou '.png', indicando que o cliente está solicitando uma imagem. Se isso acontecer, o servidor usa path.join para combinar o caminho para o diretório atual com a URL da requisição para obter o caminho para a imagem no sistema de arquivos.

Em seguida, o servidor usa fs.readFile para ler o arquivo de imagem e, em caso de erro, envia uma resposta com o código de status 500 e a mensagem de erro para o cliente. Caso contrário, o servidor envia uma resposta com o código de status 200 e o tipo de conteúdo "image/jpeg", seguido pelo conteúdo da imagem.

Se a URL da requisição não terminar com uma extensão de imagem, o servidor assume que o cliente está solicitando a página HTML padrão e usa fs.readFile para ler o arquivo index.html, enviando-o de volta para o cliente com um cabeçalho que indica que o tipo de conteúdo é "text/html".

O servidor é iniciado na porta especificada por process.env.PORT ou na porta 3000, se não houver uma variável de ambiente definida. Uma mensagem é exibida no console quando o servidor estiver pronto para receber conexões.
*/