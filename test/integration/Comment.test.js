/**
 * Comment.test.js
 * 
 * Tests for the Comment model.
 */
var request = require('supertest');
var mockObjects = require('../mock-objects');
var assert = require('assert');

describe('Comment Tests', () => {

  describe('[GET] /api/comments', () => {
    it('should get the mocked up comments', done => {
      request(sails.hooks.http.app)
        .get('/api/comments')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end( (err, res) => {
          if (err) {
            throw err;
          }

          // shaping data to ignore ids and dates
          var result = [];
          res.body.forEach(element => {
            var comment = {
              physician: element.physician,
              text: element.text
            }
            result.push(comment);
          });
          
          assert.equal(JSON.stringify(result), JSON.stringify(mockObjects.comments));
          done();
        });
    });

  });

  describe("[POST] /api/comments", () => {
    it("should create new comment", done => {
      request(sails.hooks.http.app)
        .post('/api/comments')
        .send({
          physician: '5a35cc23ceee9e24764ba77c',
          text: 'it causes allergies'
        })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201)
        .end( (err, res) => {
          if (err) {
            throw err;
          }          
          assert.equal(res.body.physician, '5a35cc23ceee9e24764ba77c');
          assert.equal(res.body.text, 'it causes allergies');
          done();
        })
    });
  });

});