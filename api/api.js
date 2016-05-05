import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('Hello from server!\n');
});

app.use((req, res) => {
  res.status(404).end('NOT FOUND');
});

const server = app.listen(3030, () => {
  console.log('Api: Listening at localhost:%s', server.address().port);
});
