import { DataTypes } from 'sequelize';
import db from '../base/base.js';



// Definición del modelo Competencia
const Competencia = db.define('Competencia', {
  idCompetencia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreCompetencia: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'Competencia',
  timestamps: false,
});
export default Competencia