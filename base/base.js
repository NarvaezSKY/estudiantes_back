import  Sequelize  from "sequelize";

const bd = new Sequelize('estudiantes','root','1234',{
    host: 'localhost',
    dialect: 'mysql'   
})

export default bd;