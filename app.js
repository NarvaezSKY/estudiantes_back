import express from 'express'
import bd from './base/base.js'
import cors from "cors";
//Routers
import  router  from "./routes/app.routes.js";
import  routerApdz  from "./routes/apdz.routes.js";
import  routerCompete  from "./routes/compe.routes.js";
import  routerInstru  from "./routes/Instru.routes.js";
import  routerNotas  from "./routes/notas.routes.js";
import  routerResu  from "./routes/resu.routes.js";

const app=express()
app.use(cors())
app.use(express.json())

app.listen(1000, ()=>{
    console.log('conectado en http://localhost:1000')
})
app.use('/cursos',router);
app.use('/aprendiz', routerApdz)
app.use('/competencia', routerCompete)
app.use('/instructor', routerInstru)
app.use('/notas', routerNotas)
app.use('/resultados', routerResu)

try{
    await bd.authenticate();
    console.log('conexion exitosa');
    }catch(err){
       console.error(err);
    }