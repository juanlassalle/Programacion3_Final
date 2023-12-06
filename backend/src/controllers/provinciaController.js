import Provincia from '../models/Provincia.js'
import Ciudad from '../models/Ciudad.js'

const obtenerProvincias = async(req,res) => {
    try {
        const provincias = await Provincia.findAll()
        res.json(provincias)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

const obtenerProvincia = async(req,res) => {
    try {
        const { id } = req.params
        const provincia = await Provincia.findByPk(id)
        res.json(provincia)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

const crearProvincia = async(req,res) => {
    try {
        const { nombre } = req.body

        const nuevaProvincia = await Provincia.create({
            nombre: nombre
        })

        res.status(201).json(nuevaProvincia)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}
const editarProvincia = async(req,res) => {
    try {
        const { id } = req.params
        const provincia = await Provincia.findByPk(id)
        provincia.set(req.body)
        await provincia.save()
        res.status(200).json(provincia)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

const eliminarProvincia = async(req,res) => {
    try {
        const { id } = req.params
        await Provincia.destroy({
            where: {id}
        })
        res.status(204).end()
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
// join
const provinciaCiudad = async(req,res) => {
    try {
        const { id } = req.params
        const provincia = await Provincia.findOne({
            where: {id},
            include: {
                model: Ciudad,
                attributes: {nombre}
            }
        })
        res.json(provincia)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export {
    obtenerProvincias,
    obtenerProvincia,
    crearProvincia,
    editarProvincia,
    eliminarProvincia,
    provinciaCiudad
}
