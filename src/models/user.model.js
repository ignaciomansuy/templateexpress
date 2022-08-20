const UserModel = (sequelize, type) => {
  return sequelize.define('user', {
    id: {
      type: type.UUID,
      defaultValue: type.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: type.STRING,
    },
  })
}

export default UserModel
