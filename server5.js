const express = require('express');
const app = express();
app.listen(3000,()=>{
    console.log("Server no ar!");
})

app.get('/',(req,res)=>{
    res.send('Testes com parâmetros');
})

//rota com hífen
app.get('/distancia/:pontoA-:pontoB', (req,res)=>{
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB - pontoA;
    res.send(`A distancia, usando hífen entre ${pontoA}, e ${pontoB} é ${distancia}`)
    
})

//rota com ponto

app.get('/distancia/:pontoA.:pontoB', (req,res)=>{

    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB - pontoA;
    res.send(`A distancia, usando ponto entre ${pontoA}, e ${pontoB} é ${distancia}`)
    
})


