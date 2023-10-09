import instructor from "../model/Instru.js";
const Curso = async (req,res)=>{
    try{
        const estudiantes = await instructor.findAll();
        res.json(estudiantes);
    }catch(error){
        res.json({message: error.message})

    }
}
const traer1 = async (req, res)=>{
    try{
        const Estu = await instructor.findAll({
            where: {idInstructor: req.params.id}
        });
        res.json(Estu[0]);
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}


const crear=async(req,res)=>{
    try{
        await instructor.create(req.body)
        res.json({
            message:"creado rey"
        })
    } catch(error){
        res.json({message:error.message})
    }
}



  const actualizar = async (req, res)=>{
    try{
        await instructor.update(req.body,{
            where: {idInstructor: req.params.id}
        });
        res.json({"message":`actualizao el ${req.params.id}`});
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}




  const eliminar = async (req, res)=>{
    try{
        const Estu = await instructor.destroy({
            where: {idInstructor: req.params.id}
        });
        res.json({"message":`me he cargao el ${req.params.id}`});
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}


export {Curso,traer1, crear, actualizar,eliminar}
