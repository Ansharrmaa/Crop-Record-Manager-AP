const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  type: { type: String, required: true },
  yield: { type: Number, required: true },
  harvestDate: { type: Date, required: true }
});

module.exports = mongoose.model('Crop', cropSchema);
