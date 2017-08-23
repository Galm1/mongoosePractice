const mongoose = require('mongoose');

const dadJokesSchema = new mongoose.Schema({
    joke: { type: String, required: true, unique: true },
    peolpleWhoLikeIt: [String],
    peolpleWhoDontLikeIt: [String],
    wasFunny: {type: Boolean}
})

const Recipe = mongoose.model('dadjoke', dadJokesSchema);

module.exports = Recipe;
