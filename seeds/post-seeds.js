const { Post } = require("../models");

const postdata = [
  {
    title: "javaScript jazz.",
    body: "We just learned about this awesome library called jQuery! Check it out: https://jquery.com/",
    user_id: 1,
  },
  {
    title: "css blues.",
    body: "Here's a cool game that teaches you flexbox, while moving frogs! https://flexboxfroggy.com/",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
