import Ciudad from "../models/Ciudad.js";
import Persona from "../models/Persona.js";


const obtenerCiudades = async(req,res) => {
    try {
        const ciudades = await Ciudad.findAll()
        res.json(ciudades)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}
const obtenerCiudad = async(req,res) => {
    try {
        const {id} = req.params
        const ciudad = await Ciudad.findByPk(id)
        res.json(ciudad)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

const crearCiudad = async(req,res) => {
    try {
        const {nombre,provinciaId} = req.body
        const nuevaCiudad = await Ciudad.create({
            nombre: nombre,
            provinciaId: provinciaId
        })
        //res.status(201).json(nuevaCiudad)
        res.redirect('/ciudades')
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
    res.redirect
}
const actualizarCiudad = async(req,res) => {
    try {
        const { id } = req.params
        const ciudad = await Ciudad.findByPk(id)
        ciudad.set(req.body)
        await ciudad.save()
        req.status(202).json(ciudad)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

const eliminarCiudad = async(req,res) => {
    try {
        const { id } = req.params
        await Ciudad.destroy({
            where: {id}
        })
        res.status(204).end()
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

// JOIN
const ciudadPersona = async(req,res) => {
    try {
        const {id} = req.params
        const ciudad = await Ciudad.findOne({
            where: {id},
            include: {
                model: Persona,
                attributes: [nombre,apellido,dni]
            }
        })
        res.json(ciudad)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


export {
    obtenerCiudades,
    obtenerCiudad, 
    crearCiudad,
    actualizarCiudad,
    eliminarCiudad,
    ciudadPersona
}