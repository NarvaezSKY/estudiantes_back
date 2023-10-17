import  Sequelize  from "sequelize";

const bd = new Sequelize('estudiantes','root','12345',{
    host: 'localhost',
    dialect: 'mysql'   
})

export default bd;