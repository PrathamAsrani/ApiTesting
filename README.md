# ApiTesting


// Overview
Creating via node+express
hosting heroku	
adding to react
problems: course policy

steps: 
a. code -a .
b. create a package: npm init
c. install express: npm i express
d. install cors policies: npm i cors
e. 1. open package.json 2. include "engines": {"node" : "version of node (node -v)"}
f. create file {{fileName}}.js // to start the server // note: file name needs to match in package.json :  "main": "index.js",
f.1 code inside that file ({{fileName}}.js) to start server:

/*
// keywords in API:
GET: to read
POST
PATCH
DELETE
*/
 
/*
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
	response.send("Hello, I'm live");
});


// listen() use to start server
app.listen(port, () => {
	console.log("I am live, Yo Pratham!");
}); 
*/

after this run :
g. npm {{fileName}}.js
h. 1.npm install nodemon 2. inside package.json rewrite script element: as (
"scripts": {
    "test": "nodemon",
    "start": "index.js"
  },
)
i. run npm test

// add "Procfile": used to give instruction to execute commands on heroku
// inside Procfile:
/*
// note: web starts a process, at right side we declare the process as node index.js
web: node index.js
*/

SETUP FOR NODEJS APPLICATION: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up : HEROKU
j.
install heroku cli, requirement git
check in gitbash: heroku -v
ls -al ~/.ssh : command to check ssh key

k. heroku keys:add : used to add the public ssh key to heroku
