import express from 'express'
import mongoose from 'mongoose'
import { DATABASE } from './config.js'
import morgan from 'morgan'
import cors from 'cors'
import colors from 'colors'
import authRoutes from './server/routes/auth.js'

const app = express()

//db connect
mongoose
	.connect(DATABASE)
	.then(() => console.log('MongoDB connected'.brightGreen))
	.catch((err) => console.log(err))

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//routes middleware
app.use('/api', authRoutes)

app.listen(8000, () => console.log('Server running on port 8000'.brightBlue))
