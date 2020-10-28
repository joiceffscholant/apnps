const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var path = require('path')



app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")))


app.get('/', function(req,res){
    res.render('index.ejs',{})

})

app.get('/usuarios', function(req,res){
    res.render('usuarios.ejs',{usuarios:[

        {nome:'Joice', email:'joicescholant@outlook.com'},
        {nome:'Amanda', email:'amanda@outlook.com'},
        {nome:'Maumau', email:'maumau@outlook.com'},
        {nome:'Maria', email:'mariat@outlook.com'}

    ]})

})



app.listen(3000, function(){
    console.log("conexão inicializada na porta 3000!")
})