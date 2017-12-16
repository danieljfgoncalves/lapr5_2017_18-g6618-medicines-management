/**
 * Medicine.test.js
 * 
 * Tests for the Medicine model.
 */
var request = require('supertest');
var mockObjects = require('../mock-objects');
var assert = require('assert');

describe('Medicine Tests', () => {

  describe('[GET] /medicine', () => {
    it('should get [Ativan, Biaxin, Toprol]', done => {
      request(sails.hooks.http.app)
        .get('/medicine')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end( (err, res) => {
          if (err) {
            throw err;
          }

          // shaping data to ignore ids and dates
          var result = [];
          res.body.forEach(element => {
            result.push({name:element.name});
          });
          
          assert.equal(JSON.stringify(result), JSON.stringify(mockObjects.medicines));
          done();
        });
    });

  });

  describe("[POST] /medicine", () => {
    it("should create medicine Raptiva", done => {
      request(sails.hooks.http.app)
        .post('/medicine')
        .send({
          name:"Raptiva"
        })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201)
        .end( (err, res) => {
          if (err) {
            throw err;
          }          
          assert.equal(res.body.name, "Raptiva");
          done();
        })
    });
  });

});