import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();
describe('GET all books from the database', () => {
  it('should get all books from the database', (done) => {
    chai.request(app)
      .get('/api/data/books')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
