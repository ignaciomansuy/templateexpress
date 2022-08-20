import { User } from '../config/db.js'

export const loginController = (req, res) => {
  return res.json('Login route!')
}

export const registerController = async (req, res) => {
  const user = User.build(req.body)

  await user.save({
    fields: ['name'],
  })

  return res.json(user)
}
