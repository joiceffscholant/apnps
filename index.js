const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Olá Joice!")

})

app.get('/mensagem', function(req,res){
    res.send("Essa mensagem é automática.")

})

app.get('/layout', function(req,res){
    res.send("Esse é o novo layout.")

})

app.listen(3000, function(){
    console.log("conexão inicializada na porta 3000!")
})