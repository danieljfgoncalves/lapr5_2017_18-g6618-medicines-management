/**
 * Presentation.test.js
 * 
 * Tests for the Presentation model.
 */
var request = require('supertest');
var mockObjects = require('../mock-objects');
var assert = require('assert');

describe('Presentation Tests', () => {

  describe('[GET] /presentation', () => {
    it('should get presentations of drugs [1,2]', done => {
      request(sails.hooks.http.app)
        .get('/presentation')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end( (err, res) => {
          if (err) {
            throw err;
          }

          // shaping data to ignore ids and dates
          var result = [];
          res.body.forEach(element => {          
            
            var posologies = [];
            element.posologies.forEach(pos => {
              posologies.push(pos.id);
            });
            
            result.push({
              form:element.form,
              concentration:element.concentration,
              packageQuantity:element.packageQuantity,
              drug:element.drug.id,
              posologies:posologies
            });
          });
          
          assert.equal(JSON.stringify(result), JSON.stringify(mockObjects.presentations));
          done();
        });
    });

  });

  describe("[POST] /presentation", () => {
    it("should create presentation for drug 3", done => {
      request(sails.hooks.http.app)
        .post('/presentation')
        .send({ 
          form: 'pill', 
          concentration: '100mg', 
          packageQuantity:20, 
          drug:3
        })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201)
        .end( (err, res) => {
          if (err) {
            throw err;
          }          
          assert.equal(res.body.drug, 3);
          done();
        })
    });
  });

});