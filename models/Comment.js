const { Model, Datatypes } = require("sequelize");
const User = require("./User");
const Post = require("./Post");

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

// Associations
Comment.belongsTo(User, { foreignKey: "user_id" });
Comment.belongsTo(Post, { foreignKey: "post_id" });

module.exports = Comment;
