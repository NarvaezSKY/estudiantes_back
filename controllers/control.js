import datos from "../model/model.js";
const Curso = async (req,res)=>{
    try{
        const estudiantes = await datos.findAll();
        res.json(estudiantes);
    }catch(error){
        res.json({message: error.message})

    }
}
const traer1 = async (req, res)=>{
    try{
        const Estu = await datos.findAll({
            where: {idCurso: req.params.id}
        });
        res.json(Estu[0]);
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}


const crear=async(req,res)=>{
    try{
        await datos.create(req.body)
        res.json({
            message:"creado rey"
        })
    } catch(error){
        res.json({message:error.message})
    }
}



  const actualizar = async (req, res)=>{
    try{
        await datos.update(req.body,{
            where: {idCurso: req.params.id}
        });
        res.json({"message":`actualizao el ${req.params.id}`});
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}




  const eliminar = async (req, res)=>{
    try{
        const Estu = await datos.destroy({
            where: {idCurso: req.params.id}
        });
        res.json({"message":`me he cargao el ${req.params.id}`});
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}


export {Curso,traer1, crear, actualizar,eliminar}
