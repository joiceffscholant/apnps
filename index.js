const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Olá Joice!")

})

app.listen(3000, function(){
    console.log("conexão inicializada na porta 3000!")
})