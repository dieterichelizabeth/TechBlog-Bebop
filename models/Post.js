const { Model, Datatypes } = require("sequelize");
const User = require("./User");
const Comment = require("./Comment");

class Post extends Model {}

Post.init({
  // collumn definitions
  id: {
    type: Datatypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Datatypes.STRING,
    allowNull: false,
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
  // configuration
  sequelize,
  freezeTableName: true,
  modelName: "post",
});

// Associations
Post.belongsTo(User, { foreignKey: "user_id" });
Post.hasMany(Comment, { foreignKey: "post_id" });

module.exports = Post;
