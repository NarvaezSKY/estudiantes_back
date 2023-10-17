import { DataTypes } from 'sequelize';
import db from '../base/base.js';




// Definición del modelo Aprendiz
const Aprendiz = db.define('Aprendiz', {
    idAprendiz: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreAprendiz: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    passwordAprendiz: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    emailAprendiz: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: true,
    },
    Curso_idCurso: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'Aprendiz',
    timestamps: false,
  });
  export default Aprendiz