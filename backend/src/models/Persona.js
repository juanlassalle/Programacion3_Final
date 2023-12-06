import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Persona = db.define('Persona',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    dni:{
        type: DataTypes.INTEGER,
    }
})

export default Persona