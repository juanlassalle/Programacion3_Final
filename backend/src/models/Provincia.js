import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Ciudad from "./Ciudad.js";
import Persona from "./Persona.js";

const  Provincia = db.define('Provincia',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    }
})

Provincia.hasMany(Ciudad,{
    foreignKey: 'provinciaId',
    sourceKey: 'id'
})

Ciudad.belongsTo(Provincia,{
    foreignKey: 'provinciaId',
    targetKey: 'id'
})

Ciudad.hasMany(Persona,{
    foreignKey: 'ciudadId',
    sourceKey: 'id'
})

Persona.belongsTo(Ciudad,{
    foreignKey: 'ciudadId',
    targetKey: 'id'
})

/* await Provincia.sync()
await Ciudad.sync()
await Persona.sync() */
export default Provincia