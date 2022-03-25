const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    author: {type: String, required: true},
    // likes: {type: Number, required:true}
});

module.exports = mongoose.model("Tweets", tweetSchema);
