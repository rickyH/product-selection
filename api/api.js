import express from 'express';
import bodyParser from 'body-parser';
import catalogService from './actions/catalogService';
import customerLocationService from './actions/customerLocationService';
import cookieParser from 'cookie-parser';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use(cookieParser());

/* Return the product list */
app.get('/products', (req, res) => {
  const locationID = customerLocationService(req);
  const products = catalogService(locationID);
  products.then((data) => {
    res.json(data);
  });
});

app.post('/checkout', (req, res) => {
  /* Return the user information for the user page */
  console.log(req.body);
  res.json({
    completed: true
  });
});

app.use((req, res) => {
  res.status(404).end('NOT FOUND\n');
});

const server = app.listen(3030, () => {
  console.log('Api: Listening at localhost:%s', server.address().port);
});
