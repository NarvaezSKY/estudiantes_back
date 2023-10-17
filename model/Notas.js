import { DataTypes } from 'sequelize';
import db from '../base/base.js';



// Definición del modelo Notas
const Notas = db.define('Notas', {
  idNotas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nota1: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Nota2: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Nota3: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'Notas',
  timestamps: false,
});


// Exporta los modelos
export default Notas


