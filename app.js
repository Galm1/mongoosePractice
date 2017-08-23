const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();
const models = require('./models/models.js');
const MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
const url = 'mongodb://localhost:27017/todo';
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const dadJokes = require('./models/models.js');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/jokes');
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
let database;

app.get('/', function (req, res) {
  res.render('index',[])
});
// let newJoke = 'eyyyyy its a joke bruh';
// const dadJoke = new dadJokes({joke: newJoke, peopleWhoLikeIt: 'everybody'});
// dadJoke.save()
//   .then(function () {
//     console.log('saved ' + name);
//     return dadJoke.findOne({joke: newJoke})
//   }).then(function(results) {
//     console.log('\nfindOne returned\n' + results);
//     return dadJoke.find({peopleWhoLikeIt: 'everybody'})
//   }).then(function (results) {
//     console.log('\n\nfind returned ' + results.length + ' results');
//   }).catch(function (error) {
//     console.log('error ' + JSON.stringify(error));
//   })
//   });

console.log(dadJoke);




app.listen(3000, function () {
  console.log('SERVER IS ALIVE');
})

process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});
