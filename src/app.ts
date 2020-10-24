import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import routes from './routes'

dotenv.config()
class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.midllewares()
    this.database()
    this.routes()
  }

  private midllewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
