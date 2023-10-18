const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Import your Express app
const expect = chai.expect;

chai.use(chaiHttp);

describe('Books API', () => {
  describe('GET /books/list', () => {
    it('should return a list of available books', (done) => {
      chai
        .request(app)
        .get('/books/list')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  describe('GET /books/search', () => {
    it('should return a list of books matching the search criteria', (done) => {
      const searchCriteria = { title: 'BookTitle' }; // Modify with your search criteria
      chai
        .request(app)
        .get('/books/search')
        .query(searchCriteria)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
});