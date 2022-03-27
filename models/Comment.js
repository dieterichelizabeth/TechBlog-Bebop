const { Model, Datatypes } = require("sequelize");

class Comment extends Model {}

Comment.init({
  // collumn definitions
  id: {
    type: Datatypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  body: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: Datatypes.INTEGER,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
  },
  post_id: {
    type: Datatypes.INTEGER,
    allowNull: false,
    references: {
      model: "post",
      key: "id",
    },
  },
  // configuration
  sequelize,
  freezeTableName: true,
  modelName: "comment",
});

module.exports = Comment;
