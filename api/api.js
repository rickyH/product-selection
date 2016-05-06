import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Add headers
/* Not sure this is working */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.use((req, res) => {
  res.status(404).end('NOT FOUND');
});

const server = app.listen(3030, () => {
  console.log('Api: Listening at localhost:%s', server.address().port);
});
