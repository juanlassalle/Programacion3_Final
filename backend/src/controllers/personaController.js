import Persona from '../models/Persona.js'

const obtenerPersonas = async(req,res) => {
    try {
        const personas = await Persona.findAll()
        res.json(personas)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}
const obtenerPersona = async(req,res) => {
    try {
        const {id} = req.params
        const persona = await Persona.findByPk(id)
        res.json(persona)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

const crearPersona = async(req,res) => {
    try {
        const {nombre,apellido,dni,ciudadId} = req.body

        const personaExiste = await Persona.findOne({
            where: {dni: dni}
        })

        if(personaExiste){
            return res.status(400).json({error: 'Ya existe esta persona'})
        }
        const nuevaPersona = await Persona.create({
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            ciudadId: ciudadId
        })
        res.status(201).json(nuevaPersona)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}
const actualizarPersona = async(req,res) => {
    try {
        const { id } = req.params
        const persona = await Persona.findByPk(id)
        persona.set(req.body)
        await persona.save()
        res.status(202).json(persona)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

const eliminarPersona = async(req,res) => {
    try {
        const { id } = req.params
        await Persona.destroy({
            where: {id}
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

export {
    obtenerPersonas,
    crearPersona,
    obtenerPersona,
    actualizarPersona,
    eliminarPersona
}