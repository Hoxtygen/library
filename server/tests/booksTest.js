import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe } from 'mocha';
import app from '../server';


chai.use(chaiHttp);
chai.should();

describe('Books all test on Books in the library', () => {
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
 
  describe('GET a book from the database', () => {
    it('should get a single book from the database', (done) => {
      const id = 3;
      chai.request(app)
        .get(`/api/data/books/${id}`)
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

  describe('DELETE a book from the database', () => {
    it('should delete a book from the database', (done) => {
      const id = 3;
      chai.request(app)
        .delete(`/api/data/books/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('PUT update a given book in the database', () => {
    it('should update a given book in the database', (done) => {
      const id = 2;
      chai.request(app)
        .get(`/api/data/books/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
