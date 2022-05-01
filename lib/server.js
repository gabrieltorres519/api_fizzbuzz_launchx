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