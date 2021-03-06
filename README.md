# TechBlog-Bebop

Model-View-Controller (MVC) Tech Blog ๐ ๐ ๐

Another Tech Blog- but early 2000's/Space themed.

[Click to view the deployed application!](https://agile-lake-02431.herokuapp.com/)

## Table of Contents ๐ฑ

- [Installation Resources](#Installation-Resources)
- [Run Locally](#Run-Locally)
- [Lessons Learned](#Lessons-Learned)
- [Feedback](#Feedback)
- [Documentation](#Documentation)

TechBlog Bebop is a CMS-style blog where developers can publish their blog posts and comment on other developersโ posts as well. Users can view the homepage without logging in, however once a user clicks on any other links in the navigation, or on a post title to see its comments, they are prompted to login/sign up. After a user signs in, they are able to create, update, and delete their posts/comments, as well as read other's comments. The application tracks idle time, and will automatically log the user out after 60 seconds of no "click" activity.

The app follows the MVC paradigm in its structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the Express-Session npm package for authentication. Based on the following user story:

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

Built with Node.js, CSS, MySQL, Express.js, Express Sessions, Bcrypt, Dotenv, Sequelize, and Handlebars.

## Screenshots

![Screen Shot 2022-04-14 at 9 56 29 PM](https://user-images.githubusercontent.com/95142863/163511356-133cd9cd-75f0-4069-9731-71faa00d66bc.png)

![Screen Shot 2022-04-14 at 9 58 02 PM](https://user-images.githubusercontent.com/95142863/163511139-2c7f6e8a-7a13-45e2-b8f4-5b1490c7d373.png)

## Demo

https://user-images.githubusercontent.com/95142863/163658600-534c15dd-361c-4b09-82c4-994db5d6bb90.mp4

## Installation Resources

This project requires the following-

- Mysql: Here is a resource to get started- You will need to create a username and password for the environmental variables: https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/
- Node: Here is a resource to get started- https://nodejs.dev/learn/how-to-install-nodejs

Check that Node is intalled

```bash
  node -v
```

Check that Mysql is installed

```bash
  mysql --version
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/dieterichelizabeth/TechBlog-Bebop.git
```

Go to the project directory

```bash
  cd TechBlog-Bebop
```

Install dependencies

```bash
  npm install
```

Create the .env file in your root directory

```bash
  DB_NAME='tech_blog_db'

  DB_USER='INSERT your MYSQL username'

  DB_PW='INSERT your MYSQL password'
```

Seed the database (Optional)

```bash
  npm run seeds
```

Start the server

```bash
  npm start
```

Open up your local host in the browser and enjoy!

```
http://localhost:3001/
```

## Lessons Learned

One of the challenges I faced while building this app was setting a time limit on how long a user could be logged in. First, I updated the cookie to expire after a 2 minutes. However, I realized that the goal was to have the session timeout when the USER IS IDLE. I tested the application and found that- even when creating blog posts, commenting, and deleting- the session still expired after two minutes. Therefore, I removed the cookie max-age, and began to work on a javascript function which would specifically track "click" activity for the user.

I found an incredible resource at [W3 schools](https://www.w3docs.com/snippets/javascript/how-to-detect-idle-time-in-javascript.html), to use as a guide for my countdown function. After a little thinking, building, and refactoring, I tested the site to make sure that if the user was clicking, they would not be logged out. I then timed the last click with session timeout, to triple check my work.

Another challenge I ran into was working with conditional statements in the Handlebars template for creating buttons. I wanted the user to only be able to "edit" and "delete" their own content. However, [Handlebars Helpers](https://handlebarsjs.com/guide/builtin-helpers.html#if) will conditionally render blocks of HTML based on truthy or falsy variables. I decided to create a function which would evaluate if the author of the post/comment was the current user, and placed it within the home-route.js before the data was passed to Handlebars.

home-routes.js:

```
// Add "current user" property for the user's posts
if (post.user.id === req.session.user_id) {
    post.currentUser = "true";
}

// Add "current user" property for the user's comments
for (let i = 0; i < post.comments.length; i++) {
    if (post.comments[i].user_id === req.session.user_id) {
    post.comments[i].currentUser = "true";
    }
}
```

single-post.handlebars:

```
{{#if post.currentUser}}{{/if}}
{{#if currentUser}}{{if}}
```

## Technologies used
  Built with Node.js, CSS, MySQL, Express.js, Express Sessions, Bcrypt, Dotenv, Sequelize, and Handlebars.
  
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Handlebars](https://img.shields.io/badge/handlebars-%23E34F26.svg?style=for-the-badge&logo=handlebars&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) 
 ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## Feedback

This web app is the first Full stack application I have built. If you have any feedback, please reach out!

email: dieterichelizabeth@gmail.com

## Documentation

- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/en/guide/routing.html)
- [Express Sessions Documentation](https://www.npmjs.com/package/express-session)
- [Bcrypt Documentation](https://www.npmjs.com/package/bcrypt)
- [Dotenv Documentation](https://linktodocumentation)
- [Sequelize Documentation](https://sequelize.org/docs/v6/getting-started/)

## Blogs/Resources

- [W3 Idle Time Docs](https://www.w3docs.com/snippets/javascript/how-to-detect-idle-time-in-javascript.html)
- [window.onclick()](https://www.w3schools.com/jsref/event_onclick.asp)
- [Webkit scrollbar styling](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)

---

Made with โค๏ธ by Liz

ยฉ 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
