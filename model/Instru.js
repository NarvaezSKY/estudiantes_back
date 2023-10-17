import { DataTypes } from 'sequelize';
import db from '../base/base.js';




// Definición del modelo Instructor
const Instructor = db.define('Instructor', {
  idInstructor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreInstructor: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
}, {
  tableName: 'Instructor', // Especifica el nombre de la tabla en la base de datos
  timestamps: false, // Deshabilita los campos createdAt y updatedAt
});



export default Instructor


