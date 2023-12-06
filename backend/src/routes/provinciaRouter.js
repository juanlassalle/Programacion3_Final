import { Router } from "express";
import { obtenerProvincias, obtenerProvincia, crearProvincia, editarProvincia, eliminarProvincia, provinciaCiudad } from "../controllers/provinciaController.js";

const provinciaRouter = Router()

provinciaRouter.get('/provincia',obtenerProvincias)
provinciaRouter.get('/provincia/:id',obtenerProvincia)

provinciaRouter.post('/provincia',crearProvincia)

provinciaRouter.put('/provincia/:id',editarProvincia)

provinciaRouter.delete('/provincia/:id',eliminarProvincia)

provinciaRouter.get('/provincia/:id/ciudad',provinciaCiudad)


export default provinciaRouter
