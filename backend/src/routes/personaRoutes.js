import { Router } from "express";
import { actualizarPersona, crearPersona, eliminarPersona, obtenerPersona, obtenerPersonas } from "../controllers/personaController.js";


const personaRoutes = Router()


personaRoutes.get('/personas',obtenerPersonas)
personaRoutes.get('/persona/:id', obtenerPersona)

personaRoutes.post('/persona', crearPersona)

personaRoutes.put('/persona/:id',actualizarPersona)

personaRoutes.delete('/persona/:id', eliminarPersona)


export default personaRoutes
