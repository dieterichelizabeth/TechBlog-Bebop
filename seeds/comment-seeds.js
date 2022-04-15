const { Comment } = require("../models");

const commentdata = [
  {
    body: "Thanks for sharing",
    user_id: 4,
    post_id: 1,
  },
  {
    body: "Already reached level 24, I love this game!",
    user_id: 3,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
