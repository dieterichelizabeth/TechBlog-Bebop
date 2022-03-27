const { Model, Datatypes } = require("sequelize");
const Post = require("./Post");
const Comment = require("./Comment");

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

// Associations
User.hasMany(Post, { foreignKey: "user_id" });
User.hasMany(Comment, { foreignKey: "user_id" });

module.exports = User;
