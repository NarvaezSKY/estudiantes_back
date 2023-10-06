-- MySQL Script generated by MySQL Workbench
-- Fri Oct  6 15:47:29 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema rider
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema estudiantes
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `estudiantes` ;

-- -----------------------------------------------------
-- Schema estudiantes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `estudiantes` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `estudiantes` ;

-- -----------------------------------------------------
-- Table `estudiantes`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudiantes`.`curso` (
  `idCurso` INT NOT NULL AUTO_INCREMENT,
  `nombreCurso` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`idCurso`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estudiantes`.`aprendiz`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudiantes`.`aprendiz` (
  `idAprendiz` INT NOT NULL AUTO_INCREMENT,
  `nombreAprendiz` VARCHAR(45) NULL DEFAULT NULL,
  `passwordAprendiz` VARCHAR(45) NULL DEFAULT NULL,
  `emailAprendiz` VARCHAR(45) NULL DEFAULT NULL,
  `Curso_idCurso` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idAprendiz`),
  UNIQUE INDEX `emailAprendiz_UNIQUE` (`emailAprendiz` ASC) VISIBLE,
  INDEX `fk_Aprendiz_Curso_idx` (`Curso_idCurso` ASC) VISIBLE,
  CONSTRAINT `fk_Aprendiz_Curso`
    FOREIGN KEY (`Curso_idCurso`)
    REFERENCES `estudiantes`.`curso` (`idCurso`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estudiantes`.`competencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudiantes`.`competencia` (
  `idCompetencia` INT NOT NULL AUTO_INCREMENT,
  `nombreCompetencia` VARCHAR(45) NULL DEFAULT NULL,
  `Curso_idCurso` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idCompetencia`),
  INDEX `fk_Competencia_Curso1_idx` (`Curso_idCurso` ASC) VISIBLE,
  CONSTRAINT `fk_Competencia_Curso1`
    FOREIGN KEY (`Curso_idCurso`)
    REFERENCES `estudiantes`.`curso` (`idCurso`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estudiantes`.`instructor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudiantes`.`instructor` (
  `idInstructor` INT NOT NULL AUTO_INCREMENT,
  `nombreInstructor` VARCHAR(60) NULL DEFAULT NULL,
  PRIMARY KEY (`idInstructor`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estudiantes`.`curso_instru`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudiantes`.`curso_instru` (
  `Instructor_idInstructor` INT NULL DEFAULT NULL,
  `Curso_idCurso` INT NULL DEFAULT NULL,
  INDEX `fk_Curso_Instru_Instructor1_idx` (`Instructor_idInstructor` ASC) VISIBLE,
  INDEX `fk_Curso_Instru_Curso1_idx` (`Curso_idCurso` ASC) VISIBLE,
  CONSTRAINT `fk_Curso_Instru_Curso1`
    FOREIGN KEY (`Curso_idCurso`)
    REFERENCES `estudiantes`.`curso` (`idCurso`),
  CONSTRAINT `fk_Curso_Instru_Instructor1`
    FOREIGN KEY (`Instructor_idInstructor`)
    REFERENCES `estudiantes`.`instructor` (`idInstructor`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estudiantes`.`notas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudiantes`.`notas` (
  `idNotas` INT NOT NULL AUTO_INCREMENT,
  `Nota1` INT NULL DEFAULT NULL,
  `Nota2` INT NULL DEFAULT NULL,
  `Nota3` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idNotas`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estudiantes`.`resultados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudiantes`.`resultados` (
  `idResultados` INT NOT NULL AUTO_INCREMENT,
  `nombreResultados` VARCHAR(45) NULL DEFAULT NULL,
  `Competencia_idCompetencia` INT NULL DEFAULT NULL,
  `Notas_idNotas` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idResultados`),
  INDEX `fk_Resultados_Competencia1_idx` (`Competencia_idCompetencia` ASC) VISIBLE,
  INDEX `fk_Resultados_Notas1_idx` (`Notas_idNotas` ASC) VISIBLE,
  CONSTRAINT `fk_Resultados_Competencia1`
    FOREIGN KEY (`Competencia_idCompetencia`)
    REFERENCES `estudiantes`.`competencia` (`idCompetencia`),
  CONSTRAINT `fk_Resultados_Notas1`
    FOREIGN KEY (`Notas_idNotas`)
    REFERENCES `estudiantes`.`notas` (`idNotas`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
