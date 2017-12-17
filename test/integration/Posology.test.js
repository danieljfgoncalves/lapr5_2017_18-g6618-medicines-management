/**
 * Posology.test.js
 * 
 * Tests for the Posology model.
 */
var request = require('supertest');
var mockObjects = require('../mock-objects');
var assert = require('assert');

describe('Posology Tests', () => {

  describe('[GET] /api/posologies', () => {
    it('should get the two mocked up posologies', done => {
      request(sails.hooks.http.app)
        .get('/api/posologies')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end( (err, res) => {
          if (err) {
            throw err;
          }

          // shaping data to ignore ids and dates
          var result = [];
          res.body.forEach(element => {
            var posology = {
              period: element.period,
              interval: element.interval,
              dosage: element.dosage,
              technique: element.technique
            }
            if (element.recommendedFor) {
              posology.recommendedFor = element.recommendedFor;
            }

            result.push(posology);
          });
          
          assert.equal(JSON.stringify(result), JSON.stringify(mockObjects.posologies));
          done();
        });
    });

  });

  describe("[POST] /api/posologies", () => {
    it("should create new posology", done => {
      request(sails.hooks.http.app)
        .post('/api/posologies')
        .send({
          period: '7 days',
          interval: '2 n\' 2',
          technique: 'oral',
          dosage: '10mg',
          posologies: [1, 2]
        })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201)
        .end( (err, res) => {
          if (err) {
            throw err;
          }          
          assert.equal(res.body.period, "7 days");
          assert.equal(res.body.interval, "2 n\' 2");
          assert.equal(res.body.technique, 'oral');
          assert.equal(res.body.dosage, '10mg');
          assert.deepEqual(res.body.posologies, [1, 2]);
          done();
        })
    });
  });

});