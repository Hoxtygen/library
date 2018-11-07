import express from 'express';
import bodyParser from 'body-parser';

const app = express();

//  port
const port = process.env.PORT || 5001;

//  use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my personal library, hope you find something that might interest you',
  });
});

//  fire up the server
app.listen(port, () => console.log(`Server running on port: ${port}`));

export default app;
