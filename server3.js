const express = require('express');
const app = express();


server2.listen(3000,()=>{
    console.log("Servidor em execução");
})

app.get('/',(req, res)=>{

    res.send("Olá mundo");

})



app.get('/ola/:nome',(req,res)=>{
    console.log(req.params.nome);
    res.send("Olá" + req.params.nome);
})

app.get('/ola/:nome/:empresa',(req,res)=>{
    
    res.send("Olá" + req.params.nome + 'Da empresa' + req.params.empresa);
})

app.get('/soma/:a/:b',(req,res)=>{
    
    res.send("O Resultado da soma de" + req.params.a+'e'+req.params.b + 'é:' + (parseInt(req.params.a) + (parseInt(req.params.b))));
})


