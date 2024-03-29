import express from 'express'
import cors from 'cors'
import empleadoRoutes from './routes/empleado.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(cors())

app.use(indexRoutes)
app.use('/api', empleadoRoutes)

app.use((req, res, next)=>{    
    res.status(404).json({
        message: "endpoint not found"
    })
})

export default app