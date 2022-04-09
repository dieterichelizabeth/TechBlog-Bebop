const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    id: 1,
    username: "sPike",
    userPassword: "fjewioafjeiow",
  },
  {
    id: 2,
    username: "FaYe",
    userPassword: "fewjifojeiqo",
  },
  {
    id: 3,
    username: "jEt",
    userPassword: "erqiouc",
  },
  {
    id: 4,
    username: "edWarD",
    userPassword: "kfopjvnirow",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
