import express from 'express'
import bd from './base/base.js'
import cors from "cors";
import  router  from "./routes/app.routes.js";

const app=express()
app.use(cors())
app.use(express.json())

app.listen(1000, ()=>{
    console.log('conectado en http://localhost:1000')
})
app.use('/estudiantes',router);

try{
    await bd.authenticate();
    console.log('conexion exitosa');
    }catch(err){
       console.error(err);
    }