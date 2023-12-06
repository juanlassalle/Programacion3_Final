import { Router } from "express";
import { obtenerCiudades, obtenerCiudad, crearCiudad, actualizarCiudad, eliminarCiudad, ciudadPersona } from "../controllers/ciudadController.js";

const ciudadRouter = Router()

ciudadRouter.get('/ciudad',obtenerCiudades)
ciudadRouter.get('/ciudad/:id',obtenerCiudad)

ciudadRouter.post('/ciudad', crearCiudad)

ciudadRouter.put('/ciudad/:id',actualizarCiudad)

ciudadRouter.delete('/ciudad/:id',eliminarCiudad)

ciudadRouter.get('/ciudad/:id/persona',ciudadPersona)

export default ciudadRouter