/**
 * Drug.test.js
 * 
 * Tests for the Drug model.
 */
var request = require('supertest');
var mockObjects = require('../mock-objects');
var assert = require('assert');

describe('Drug Tests', () => {

  describe('[GET] /drug', () => {
    it('should get [Atorvastatin, Prozac, Reglan]', done => {
      request(sails.hooks.http.app)
        .get('/drug')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end( (err, res) => {
          if (err) {
            throw err;
          }

          // shapping data to ignore ids and dates
          var result = [];
          res.body.forEach(element => {
            var medicines = [];
            element.medicines.forEach(med => {
              medicines.push(med.id);
            });
            result.push({
              name:element.name,
              medicines:medicines
            });
          });
          
          assert.equal(JSON.stringify(result), JSON.stringify(mockObjects.drugs));
          done();
        });
    });

  });

  describe("[POST] /drug", () => {
    it("should create drug Memonativ", done => {
      request(sails.hooks.http.app)
        .post('/drug')
        .send({
          name:"Memonativ",
          medicines: [1,2]
        })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201)
        .end( (err, res) => {
          if (err) {
            throw err;
          }          
          assert.equal(res.body.name, "Memonativ");
          done();
        })
    });
  });

});