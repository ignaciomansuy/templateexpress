import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'

import { PORT } from './config.js'

const app = express()

// Settings
app.set('port', PORT)
app.set('json spaces', 4)

// Middlewares
app.use(cors({ origin: process.env.ORIGIN || 'https://localhost' }))
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)

export default app
