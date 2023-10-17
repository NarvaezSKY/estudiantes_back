import { DataTypes } from 'sequelize';
import db from '../base/base.js';


// Definición del modelo Curso_Instru
const Curso_Instru = db.define('curso_instru', {
  Instructor_idInstructor: {
  type: DataTypes.INTEGER,
  allowNull: true,
},
Curso_idCurso: {
  type: DataTypes.INTEGER,
  allowNull: true,
}}, {
  tableName: 'curso_instru', 
  timestamps: false, // Deshabilita los campos createdAt y updatedAt
});




// Curso.hasMany(Aprendiz, { foreignKey: 'Curso_idCurso' });
// Aprendiz.belongsTo(Curso, { foreignKey: 'Curso_idCurso' });

// Curso.hasMany(Competencia, { foreignKey: 'Curso_idCurso' });
// Competencia.belongsTo(Curso, { foreignKey: 'Curso_idCurso' });

// Competencia.hasMany(Resultados, { foreignKey: 'Competencia_idCompetencia' });
// Resultados.belongsTo(Competencia, { foreignKey: 'Competencia_idCompetencia' });

// Notas.hasOne(Resultados, { foreignKey: 'Notas_idNotas' });
// Resultados.belongsTo(Notas, { foreignKey: 'Notas_idNotas' });

// Instructor.belongsToMany(Curso, { through: Curso_Instru, foreignKey: 'Instructor_idInstructor' });
// Curso.belongsToMany(Instructor, { through: Curso_Instru, foreignKey: 'Curso_idCurso' });

// Exporta los modelos
export default Curso_Instru


