const express = require('express');
const server = express();
server.listen(3000);

server.use((req,res)=>{
    console.log("teste1")

})


//middleware
// server.use((req,res)=>{
//     console.log("teste")

// })

// server.use((req,res, next)=>{
//     console.log("teste1")
//     next()

// })

server.use((req,res, next)=>{
    req.resuestTime = Date.now();
    next()

})


server.get('/',(req,res)=>{
    console.log(req.requestTime);
    res.send('<h1>Teste de conexão</h1>')
})
