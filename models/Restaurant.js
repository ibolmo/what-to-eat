var fs = require('fs');
var request = require('request');
var mongoose = require('mongoose');
var uri = require('urijs');

var RestaurantSchema = new mongoose.Schema({
  placeid:    { type: String, index: { unique: true }},
  name:       { type: String, required: true },
  location:   { type: [Number], index: '2d' },
  address: String,
  hours: String,
  phone_number: String,
  website: String,
  categories: [String],
  images: [String],
  logo: String,
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

RestaurantSchema.pre('validate', function(next){
  // todo(ibolmo): better check if need of update
  if (this.hours) return next();

  var url = uri('https://maps.googleapis.com/maps/api/place/details/json').query({
    placeid: this.placeid,
    key: app.get('GMAPS_KEY')
  });

  var self = this;
  request(url + '', function(err, response, body){
    if (err) return next(new Error(err));

    if (app.get('DEBUG')) fs.writeFile('place.json', body);

    var place = JSON.parse(body);
    if (!place) console.error('could not parse ' + body);
    place = place.result;

    self.address = place.formatted_address;
    self.phone_number = place.formatted_phone_number;
    self.hours = place.opening_hours.weekday_text;
    self.website = place.website;
    if (self.website) self.logo = 'https://logo.clearbit.com/' + uri(place.website).domain();
    self.images = place.photos && place.photos.map(function(record){
      return 'https://maps.googleapis.com/maps/api/place/photo?' + [
        'maxwidth=720',
        'photoreference=' + record.photo_reference,
        'key=' + app.get('GMAPS_KEY')
      ].join('&');
    });

    next();
  });
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
