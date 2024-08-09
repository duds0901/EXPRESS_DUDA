const express = require('express');
const server2 = express();
const morgan = require('morgan')

server2.listen(3000);


// server2.use(morgan("tiny"))
// server2.use(morgan(":method :url :status"))

server2.use(morgan("Método = :method | Status = :status | Url = :url"))

server2.get("/", (req,res)=>{
    res.send("Teste de conexão de server2")
})

