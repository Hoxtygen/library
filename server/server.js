import express from 'express';
import bodyParser from 'body-parser';
import booksRouter from './routes/booksRoute';
import authorsRouter from './routes/authorsRoute'

const app = express();

//  port
const port = process.env.PORT || 5001;

//  use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//  routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my personal library, hope you find a book worth reading in my collection',
  });
});
app.use('/api/v1', booksRouter);
app.use('/api/v1', authorsRouter);

//  fire up the server
app.listen(port, () => console.log(`Server running on port: ${port}`));

export default app;
