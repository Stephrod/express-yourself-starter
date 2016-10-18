//sets my dependency from npm(package.json)
const express = require('express');
const ejs = require('ejs');

//sets my dependency from node
const path = require('path');


//initializes my app
const app = express();

//sets my view directory path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//adds a route to my express app the renders my index view
app.get('/', function(req, res, next){
  res.render('index.ejs', { greeting: 'Hello my name is Stephanie Rodriguez. I am a web developer out of Austin, TX', skills: ['HTML', 'CSS', 'Javascript', 'JQuery', 'Node.js/ Express.js'], hobbies: ['Coding', 'Social Outings', 'BBQing', 'Softball', 'Swimming'] });
});

//sets up my server
const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));
