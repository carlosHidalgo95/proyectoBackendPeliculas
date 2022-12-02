const express = require('express');
const app = express();
const db = require('./db/db');
require('dotenv').config();

const router = require('./router');

// const PORT = 3002;

//SALTARSE POLITICA CORS DE GOOGLE CHROME PARA PRUEBAS LOCALES CON EL FRONTED
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE,OPTIONS"
    );
    next();
});

app.use(express.json());
app.use(router);

app.listen(`0.0.0.0:$PORT`, ()=>{
    console.log(`El servidor esta up y alojado en el puerto => ${PORT}`);

    db.sync({force:true}).then(()=> {
        console.log("Conectados a la DB");
    }).catch(error => {
        console.log('Se ha producido un error: ' + error);
    })
})