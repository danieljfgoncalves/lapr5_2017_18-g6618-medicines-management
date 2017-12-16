/**
 * Tests for the Medicine model.
 */
var request = require('supertest');
var mockObjects = require('../mock-objects');
var assert = require('assert');

describe('Medicine Tests', function() {

  describe('[GET] /medicine', function() {
    it('should get [Ativan, Biaxin, Toprol]', function (done) {
      request(sails.hooks.http.app)
        .get('/medicine')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end(function(err, res) {
          if (err) {
            throw err;
          }

          // shapping data to ignore ids and dates
          var result = [];
          res.body.forEach(element => {
            result.push({name:element.name});
          });
          
          assert.equal(JSON.stringify(result), JSON.stringify(mockObjects.medicines));

          done();
        });
    });

  });

});