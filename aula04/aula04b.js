const express = require('express')
const app = express()
const porta = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('Nome: Pericles Peres')
})
app.get('/canal',(req,res)=>{
    res.json({canal:'Programador'})
})


app.listen(porta || 3000,() => {console.log('Servidor rodando')})
