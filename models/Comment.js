const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connect/connection");

class Comment extends Model {}

Comment.init(
  {
    //collumn definitions
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    // configuration
    sequelize,
    freezeTableName: true,
    modelName: "comment",
  }
);

module.exports = Comment;