const { Model, Datatypes } = require("sequelize");

class User extends Model {}

User.init({
  // collumn definitions
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  userPassword: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  // configuration
  sequelize,
  freezeTableName: true,
  modelName: "user",
});

module.exports = User;
