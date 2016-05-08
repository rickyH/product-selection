import express from 'express';
import bodyParser from 'body-parser';
import getProducts from './actions/products';
const app = express();

/* This demo application allows access to the api from any source.  */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

/* Return the product list */
app.get('/products', (req, res) => {
  const products = getProducts();
  products.then((data) => {
    res.json(data);
  });
});

app.use((req, res) => {
  res.status(404).end('NOT FOUND\n');
});

const server = app.listen(3030, () => {
  console.log('Api: Listening at localhost:%s', server.address().port);
});
