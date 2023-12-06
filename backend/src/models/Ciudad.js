import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Ciudad = db.define('Ciudad',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    }
})

export default Ciudad