import Notas from "../model/Notas.js";
const Curso = async (req,res)=>{
    try{
        const estudiantes = await Notas.findAll();
        res.json(estudiantes);
    }catch(error){
        res.json({message: error.message})

    }
}
const traer1 = async (req, res)=>{
    try{
        const Estu = await Notas.findAll({
            where: {idNotas: req.params.id}
        });
        res.json(Estu[0]);
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}


const crear=async(req,res)=>{
    try{
        await Notas.create(req.body)
        res.json({
            message:"creado rey"
        })
    } catch(error){
        res.json({message:error.message})
    }
}



  const actualizar = async (req, res)=>{
    try{
        await Notas.update(req.body,{
            where: {idNotas: req.params.id}
        });
        res.json({"message":`actualizao el ${req.params.id}`});
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}




  const eliminar = async (req, res)=>{
    try{
        const Estu = await Notas.destroy({
            where: {idNotas: req.params.id}
        });
        res.json({"message":`me he cargao el ${req.params.id}`});
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}


export {Curso,traer1, crear, actualizar,eliminar}
