/**
 * Presentation.test.js
 * 
 * Tests for the Presentation model.
 */
var request = require('supertest');
var mockObjects = require('../mock-objects');
var assert = require('assert');

describe('Presentation Tests', () => {

  describe('[GET] /api/presentations', () => {
    it('should get presentations of drugs [1,2]', done => {
      request(sails.hooks.http.app)
        .get('/api/presentations')
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
            
            var comments = [];
            element.comments.forEach(comm => {
              comments.push(comm.id);
            });
            
            result.push({
              form:element.form,
              concentration:element.concentration,
              packageQuantity:element.packageQuantity,
              drug:element.drug.id,
              posologies:posologies,
              comments:comments
            });
          });
          
          assert.equal(JSON.stringify(result), JSON.stringify(mockObjects.presentations));
          done();
        });
    });

  });
  
  describe('[GET] /api/presentations/detailed', () => {
    it('should get detailed presentation', done => {
      request(sails.hooks.http.app)
        .get('/api/presentations/detailed')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end( (err, res) => {
          if (err) {
            throw err;
          }

          // shaping result to compare
          var result = [];
          res.body.forEach(element => {
            
            var posologies = [];
            element.posologies.forEach(pos => {
              posologies.push(pos.id);
            });
            
            var comments = [];
            element.comments.forEach(comm => {
              comments.push(comm.id);
            });
            
            result.push({
              form:element.form,
              concentration:element.concentration,
              packageQuantity:element.packageQuantity,
              drug:element.drug.id,
              posologies:posologies,
              comments:comments
            });
          });
          
          assert.equal(JSON.stringify(result), JSON.stringify(mockObjects.presentations));
          done();
        });
    });

  });
  
  describe('[GET] /api/presentations/1/detailed', () => {
    it('should get first detailed presentation', done => {
      request(sails.hooks.http.app)
        .get('/api/presentations/1/detailed')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end( (err, res) => {
          if (err) {
            throw err;
          }

          // shaping result to compare
          var element = res.body;
            
          var posologies = [];
          element.posologies.forEach(pos => {
            posologies.push(pos.id);
          });
          
          var comments = [];
          element.comments.forEach(comm => {
            comments.push(comm.id);
          });
          
          result = {
            form:element.form,
            concentration:element.concentration,
            packageQuantity:element.packageQuantity,
            drug:element.drug.id,
            posologies:posologies,
            comments:comments
          };
          
          assert.equal(JSON.stringify(result), JSON.stringify(mockObjects.presentations[0]));
          done();
        });
    });

  });

  describe("[POST] /api/presentations", () => {
    it("should create presentation for drug 3", done => {
      request(sails.hooks.http.app)
        .post('/api/presentations')
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