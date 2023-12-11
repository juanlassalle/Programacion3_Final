import express  from "express";
import cors from 'cors'
import db from './src/database/db.js'
import ciudadRouter from './src/routes/ciudadRoutes.js'
import personaRouter from './src/routes/personaRoutes.js'
import provinciaRouter from './src/routes/provinciaRouter.js'

/* import './src/models/Provincia.js' */

const app = express()

app.use(cors())
app.disable('x-powered-by') // deshabilita el header x-powered-by: express


app.use(express.json())

try {
    await db.authenticate()
    console.log('BD conectada')
} catch (error) {
    console.error(error)
}

const PORT = process.env.PORT || 3001

app.use(ciudadRouter)
app.use(personaRouter)
app.use(provinciaRouter)


app.listen(PORT, () => {
    console.log(`El servidor funciona en el puerto: ${PORT}`)
})