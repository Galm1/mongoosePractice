const mongoose = require('mongoose');

const dadJokesSchema = new mongoose.Schema({
    joke: { type: String, required: true, unique: true },
    peopleWhoLikeIt: [String],
    peopleWhoDontLikeIt: [String],
    wasFunny: {type: Boolean}
})

const dadJokes = mongoose.model('dadJokes', dadJokesSchema);

module.exports = dadJokes;
