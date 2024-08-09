//incorporar  respostas a partir 

const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("Servidor no ar mano!!!");

})

//criar arquivo functions


//importar as funções
const funcoes = require('./functions')

app.get('/', (req,res)=>{
    res.send("teste com arquivos externos");
})


app.get('/add/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado = funcoes.add(a,b);
    res.send(`A soma de ${a} com ${b} é ${resultado}`);
})

//criar rota com hífen

app.get('/add/:a-:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado = funcoes.add(a,b);
    res.send(`A soma de ${a} com ${b} é ${resultado}`);
})
