import Sequelize from 'sequelize'
import UserModel from '../models/user.model.js'
import { DB_USER, DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT } from './config.js'

const sequelize = new Sequelize(DB_USER, DB_NAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
})

export const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: false }).then(() => {
  // eslint-disable-next-line no-console
  console.log('SERVER (DB): Database synchronized succesfully')
})
