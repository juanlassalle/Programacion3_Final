import express  from "express";
import db from './src/database/db.js'

/* import './src/models/Provincia.js' */

const app = express()
app.disable('x-powered-by') // deshabilita el header x-powered-by: express


app.use(express.json())

try {
    await db.authenticate()
    console.log('BD conectada')
} catch (error) {
    console.error(error)
}

const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log(`El servidor funciona en el puerto: ${PORT}`)
})