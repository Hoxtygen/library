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

describe('POST a new book to the database', () => {
  it('should add a new book to the database', (done) => {
    const Item = {
      id: 8,
      title: 'The yellow leopard',
      Author: 'shaolin Dragon',
      pubYear: 2004,
      publisher: 'dragon books',
    };
    chai.request(app)
      .post('/api/data/books')
      .send(Item)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('book added');
        res.body.newBook.should.have.a.property('id');
        res.body.newBook.should.have.a.property('title');
        res.body.newBook.should.have.property('Author');
        res.body.newBook.should.have.property('pubYear');
        res.body.newBook.should.have.property('publisher');
        done();
      });
  });
});
