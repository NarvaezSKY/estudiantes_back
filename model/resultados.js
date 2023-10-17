import { DataTypes } from 'sequelize';
import db from '../base/base.js';


// Definición del modelo Resultados
const Resultados = db.define('Resultados', {
  idResultados: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreResultados: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'Resultados',
  timestamps: false,
});

// Exporta los modelos
export default Resultados


