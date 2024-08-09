const express = require('express');
const app = express();
app.listen(3000,()=>{
    console.log("Olá povo abençoado, Server no ar!")

})


const clientes = [
    {id:1, nome:"Altamir", telefone:"111111111", email:"alta@gmail.com"},
    {id:2, nome:"Berigenilda", telefone:"222222222", email:"beri@gmail.com"},
    {id:3, nome:"Conegundes", telefone:"333333333", email:"cone@gmail.com"},
    {id:4, nome:"Desideri", telefone:"444444444", email:"desi@gmail.com"},
    {id:5, nome:"Emengarda", telefone:"555555555", email:"emem@gmail.com"}
]



app.get('/',(req,res)=>{
    res.send('API de clientes')
})


//rota 2 - O total de clientes
app.get('/total_clientes',(req,res)=>{
    res.send('Total Clientes' + clientes.length);
})


//rota 3 - Apresentar dados de um cliente específico
app.get('/clientes/:id',(req,res)=>{
    const cliente = clientes.find(c =>c.id === parseInt(req.params.id));

    //Se o cliente não existe
    if(!cliente) res.status(404).send("Cliente não Encontrado!!!!");

    //Se o cliente existe, vamos apresentar uma frase de resposta
    res.send(`O Cliente é:${cliente.nome}, telefone${cliente.telefone}, email${cliente.email}`);
})



