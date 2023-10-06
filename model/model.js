import { DataTypes } from 'sequelize';
import db from '../base/base.js';



const Curso = db.define('Curso', {
    idCurso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreCurso: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
  }, {
    tableName: 'Curso', // Especifica el nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos createdAt y updatedAt
  });

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
});

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
});

// Definición del modelo Curso_Instru
const Curso_Instru = db.define('Curso_Instru', {});

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
});

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
});

// Definición de las relaciones entre las tablas
Curso.hasMany(Aprendiz, { foreignKey: 'Curso_idCurso' });
Aprendiz.belongsTo(Curso, { foreignKey: 'Curso_idCurso' });

Curso.hasMany(Competencia, { foreignKey: 'Curso_idCurso' });
Competencia.belongsTo(Curso, { foreignKey: 'Curso_idCurso' });

Competencia.hasMany(Resultados, { foreignKey: 'Competencia_idCompetencia' });
Resultados.belongsTo(Competencia, { foreignKey: 'Competencia_idCompetencia' });

Notas.hasOne(Resultados, { foreignKey: 'Notas_idNotas' });
Resultados.belongsTo(Notas, { foreignKey: 'Notas_idNotas' });

Instructor.belongsToMany(Curso, { through: Curso_Instru, foreignKey: 'Instructor_idInstructor' });
Curso.belongsToMany(Instructor, { through: Curso_Instru, foreignKey: 'Curso_idCurso' });

// Exporta los modelos
export default Curso


