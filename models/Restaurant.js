var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
  placeid:    { type: String, index: { unique: true }},
  name:       { type: String, required: true },
  location:   { type: [Number], index: '2d' },
  categories: [String],
  images: [String],
  stats: {
    considered: { type: Number, default: 0, min: 0 },
    ignored: { type: Number, default: 0, min: 0 },
    chosen: { type: Number, default: 0, min: 0 }
  },
  google: {
    created_at: { type: Date, default: Date.now },
    raw: { type: Object, required: true }
  }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
