const http = require('http')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'})
    if(req.url == '/'){
        res.write('<h1>Seja bem-vindo</h1>')
    }else if (req.url=='/canal') {
        res.write('<h1>CFB Cursos</h1>')
    }else if(req.url=='/curso'){
        res.write('<h1>Conheca os cursos do nosso canal</h1>')
    }else if(req.url=='/curso/node'){
        res.write('<h1>Curso de Node.Js</h1>')
    }
    res.end()
})

servidor.listen(porta,host,()=>{console.log('Servidor rodando')})

/*
Esse código cria um servidor HTTP simples utilizando o módulo "http" do Node.js.

A constante "porta" define a porta em que o servidor estará ouvindo requisições e a constante "host" define o endereço IP onde o servidor estará disponível.

A função "createServer" é utilizada para criar o servidor e recebe uma função de callback com dois parâmetros: "req" (request) e "res" (response). Essa função é chamada sempre que houver uma requisição para o servidor.

A função "writeHead" escreve o cabeçalho da resposta e especifica o status HTTP (200) e o tipo de conteúdo (text/html).

No corpo da função de callback, verifica-se o valor da URL da requisição com o uso da propriedade "req.url". Dependendo do valor da URL, uma mensagem HTML é escrita na resposta. Se a URL for "/", a mensagem será "Seja bem-vindo". Se a URL for "/canal", a mensagem será "CFB Cursos". E assim por diante.

Por fim, a função "end" é chamada para encerrar a resposta.

O servidor é iniciado com a função "listen" e recebe como argumentos a porta, o host e uma função de callback que é executada quando o servidor estiver pronto para ouvir requisições.

A mensagem "Servidor rodando" é exibida no console quando o servidor estiver pronto.
*/