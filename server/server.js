import express from 'express';
import bodyParser from 'body-parser';
import booksRouter from './routes/booksRoute';

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
    message: 'Welcome to my personal library, hope you find something that might interest you',
  });
});
app.use('/api/data', booksRouter);

//  fire up the server
app.listen(port, () => console.log(`Server running on port: ${port}`));

export default app;
