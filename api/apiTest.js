import chai from 'chai';
const should = chai.should();
const expect = chai.expect;
import { server } from './api.js';

/* Use supertest for requests */
const request = require('supertest')(server);

describe('Test the API', () => {
  /* Close the server when the tests are done, this is required for --watch */
  after((done) => {
    server.close();
    done();
  });

  // describe('Get /hello', () => {
  //   it('responds with JSON', (done) => {
  //     request
  //     .get('/hello')
  //     .set('Content-Type', 'application/json')
  //     .set('cookie', 'customerID=2137919283;')
  //     .expect(200)
  //     .end((err, res) => {
  //       should.not.exist(err);
  //       should.exist(res.body);
  //       expect(JSON.stringify(res.body)).to.equal(JSON.stringify({ hello: "world" }));
  //       done();
  //     });
  //   });
  // });

  describe('Post /checkout', () => {
    /* Close the server when the tests are done, this is required for --watch */
    it('responds with JSON', (done) => {
      request
      .post('/checkout')
      .set('Content-Type', 'application/json')
      .set('cookie', 'customerID=2137919283;')
      .send({ sendme: 'up' })
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res.body);
        const expectedCheckout = {
          confirmation: {
            completed: true,
            customerID: '2137919283',
            data: {
              sendme: 'up'
            }
          }
        };
        expect(JSON.stringify(res.body)).to.equal(JSON.stringify(expectedCheckout));
        done();
      });
    });
  });
});
