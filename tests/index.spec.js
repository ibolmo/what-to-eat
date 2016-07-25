var request = require('supertest');
var app = require('../app');

describe('GET /', function() {
  it('respond with title', function(done) {
    request(app)
      .get('/')
      .expect(/What to eat/)
      .expect(200, done);
  });
});


describe('POST /gps', function() {
  it('redirect to nearby', function(done) {
    request(app)
      .post('/gps')
      .field('latitude', 26.2115918)
      .field('longitude', -98.2932157)
      .expect(/Redirecting to .nearby/, done);
  });
});
