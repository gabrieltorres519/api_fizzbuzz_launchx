const ExplorerController = require("./controllers/ExplorerController");

const express = require("express");

const app = express()
app.use(express.json());
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello future api')
})

app.listen(port,()=>{
    console.log("App escuchando el puerto "+ port);
})


//Endpoint para recibir parámetros por query params
app.get('/v1/explorers/:mission',(request,response)=>{

    //La parte de la url :mission es un query params
    //Este es un método GET que va a decolver iniformación cuando se consulte   

    const mission = request.params.mission; //Recibimos el query params que nos envia el cliente

    const explorersInMission = ExplorerController.getExplorersByMission(mission); // Usando en método de la clase que contruí para usar los services

    response.json(explorersInMission);
})