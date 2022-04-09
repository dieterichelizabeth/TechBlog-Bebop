const { Post } = require("../models");

const postdata = [
  {
    title: "javaScript jazz.",
    body: "klad;fjekowqpmie",
    user_id: 1,
  },
  {
    title: "css blues.",
    body: "amkcodpqeiopf",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
