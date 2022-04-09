const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    id: 1,
    username: "sPike",
    email: "space@cowboy.com",
    userPassword: "fjewioafjeiow",
  },
  {
    id: 2,
    username: "FaYe",
    email: "people@earth.com",
    userPassword: "fewjifojeiqo",
  },
  {
    id: 3,
    username: "jEt",
    email: "watch@ship.com",
    userPassword: "erqiouc",
  },
  {
    id: 4,
    username: "edWarD",
    email: "space@chess.com",
    userPassword: "kfopjvnirow",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
