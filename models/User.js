const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connect/connection");

class User extends Model {}

User.init(
  {
    // collumn definitions
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // configuration
    sequelize,
    freezeTableName: true,
    modelName: "user",
    timestamps: false,
  }
);

module.exports = User;
