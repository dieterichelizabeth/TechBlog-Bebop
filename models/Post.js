const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connect/connection");

class Post extends Model {}

Post.init(
  {
    // collumn definitions
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    // configuration
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    modelName: "post",
  }
);

module.exports = Post;
