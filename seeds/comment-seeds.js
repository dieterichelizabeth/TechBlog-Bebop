const { Comment } = require("../models");

const commentdata = [
  {
    body: "jkefpwjqif jkdla;fjeiwop fj.",
    user_id: 4,
    post_id: 1,
  },
  {
    body: "dsakklcmdkpq mkdap ewojf mapkdsjfiwo",
    user_id: 3,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
