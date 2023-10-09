import competencia from "../model/Competencia.js";
const Curso = async (req,res)=>{
    try{
        const estudiantes = await competencia.findAll();
        res.json(estudiantes);
    }catch(error){
        res.json({message: error.message})

    }
}
const traer1 = async (req, res)=>{
    try{
        const Estu = await competencia.findAll({
            where: {idCompetencia: req.params.id}
        });
        res.json(Estu[0]);
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}


const crear=async(req,res)=>{
    try{
        await competencia.create(req.body)
        res.json({
            message:"creado rey"
        })
    } catch(error){
        res.json({message:error.message})
    }
}



  const actualizar = async (req, res)=>{
    try{
        await competencia.update(req.body,{
            where: {idCompetencia: req.params.id}
        });
        res.json({"message":`actualizao el ${req.params.id}`});
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}




  const eliminar = async (req, res)=>{
    try{
        const Estu = await competencia.destroy({
            where: {idCompetencia: req.params.id}
        });
        res.json({"message":`me he cargao el ${req.params.id}`});
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}


export {Curso,traer1, crear, actualizar,eliminar}
