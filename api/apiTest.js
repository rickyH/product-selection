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

  describe('Get /products', () => {
    it('A valid locationID responds with products', (done) => {
      request
      .get('/products')
      .set('Content-Type', 'application/json')
      .set('cookie', 'customerID=36893900;')
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res.body);
        should.exist(res.body.products);
        done();
      });
    });

    it('A valid Liverpool locationID responds with Liverpool Programmes', (done) => {
      request
      .get('/products')
      .set('Content-Type', 'application/json')
      .set('cookie', 'customerID=36893900;')
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        expect(res.body.products[0].uniqueId).equal('sports-liverpool');
        done();
      });
    });

    it('A valid London locationID responds with London Programmes', (done) => {
      request
      .get('/products')
      .set('Content-Type', 'application/json')
      .set('cookie', 'customerID=26387500;')
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        expect(res.body.products[0].uniqueId).equal('sports-arsenal');
        expect(res.body.products[1].uniqueId).equal('sports-chelsea');
        done();
      });
    });

    it('An invalid customerID responds with an error', (done) => {
      request
      .get('/products')
      .set('Content-Type', 'application/json')
      .set('cookie', 'customerID=1123123123;')
      .expect(500, 'There was a problem retrieving the customer information', done);
    });
    /* TODO: Add tests to check for sky-sports and sky-news */
  });


  describe('Post /checkout', () => {
    it('Checkout returns the data passed up plus the customerID', (done) => {
      request
      .post('/checkout')
      .set('Content-Type', 'application/json')
      .set('cookie', 'customerID=36893900;')
      .send({ sendme: 'up' })
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res.body);
        const expectedCheckout = {
          confirmation: {
            completed: true,
            customerID: '36893900',
            data: {
              sendme: 'up'
            }
          }
        };
        expect(JSON.stringify(res.body)).to.equal(JSON.stringify(expectedCheckout));
        done();
      });
    });

    it('Not sending a customerID should return an error', (done) => {
      request
      .post('/checkout')
      .set('Content-Type', 'application/json')
      .send({ sendme: 'up' })
      .expect(500, 'There was a problem processing your order', done);
    });
  });
});
