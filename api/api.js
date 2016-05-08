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
  /* First get the locationID based on the customerID */
  const locationID = customerLocationService(req);
  if (!locationID) {
    /* Not ideal to send a server error here. Should return error object */
    res.status(500).end('No Location set');
  } else {
    const products = catalogService(locationID);
    products.then((data) => {
      res.json(data);
    });
  }
});

app.post('/checkout', (req, res) => {
  /* Return the user information for the user page */
  console.log(req.body);
  res.json({
    completed: true
  });
});

app.use((req, res) => {
  res.status(404).end('NOT FOUND');
});

const server = app.listen(3030, () => {
  console.log('Api: Listening at localhost:%s', server.address().port);
});
