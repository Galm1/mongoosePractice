const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dadJokes = require('./models/models.js');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/jokes');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({extended: false}));
let database;





app.get('/', function (req, res) {
  dadJokes.find().then(function(jokes) {
  res.render('index', {data: jokes})
})});

//
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
//   });

app.post('/', function(req, res) {
  const addJoke = req.body.newJ;
  let newJoke = new dadJokes({joke: addJoke});
  newJoke.save().then(function () {
    console.log('added a new joke');
    return dadJoke.find({});
  }).catch(function (error) {
    console.log('error ' + JSON.stringify(error));
  });
  res.redirect('/');
})

// app.post('/', function(req, res) {
//   const funny = req.body.isFunny;
//   let newJoke = new dadJokes({versionKey: funny});
//   newJoke.update().then(function () {
//     console.log('decided if funny');
//     return dadJoke.find({});
//   }).catch(function (error) {
//     console.log('error ' + JSON.stringify(error));
//   });
//   res.redirect('/');
// })




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
