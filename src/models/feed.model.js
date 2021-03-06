const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, unique: true, required: true },
  feeds: [{
    name: { type: String, unique: false, required: true },
    url: { type: String, unique: false, required: true }
  }]
});

module.exports = mongoose.model('Feed', feedSchema);
