import express from 'express'
import empleadoRoutes from './routes/empleado.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', empleadoRoutes)

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Content-Type'); // Encabezados permitidos
    next();
    res.status(404).json({
        message: "endpoint not found"
    })
})

export default app