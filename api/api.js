import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import catalogService from './actions/catalogService';
import customerLocationService from './actions/customerLocationService';
import cors from 'cors';
const app = express();

/* Set the cors for the application, allow pre-flight requests. */
const corsOptions = {
  origin: 'http://localhost:5000',
  credentials: true
};
app.use(cors(corsOptions));

/* Parse any body json and cookies sent in the request */
app.use(bodyParser.json());
app.use(cookieParser());

/* Return the product list */
app.get('/products', (req, res) => {
  /* Get the locationID based on the customerID */
  const locationID = customerLocationService(req);
  if (!locationID) {
    res.status(500).end('No Location set');
  } else {
    const products = catalogService(locationID);
    products.then((data) => {
      res.json(data);
    });
  }
});

/*
  For the demo application the checkout method simply returns
  data to the user, this would ordinarily be saved to a DB
  and the user's name returned.
*/
app.post('/checkout', (req, res) => {
  const locationIdCookie = req.cookies.customerID || false;
  res.json({
    confirmation: {
      completed: true,
      customerID: locationIdCookie,
      data: req.body
    }
  });
});

/* Send a 404 if the request isn't handeled above */
app.use((req, res) => {
  res.status(404).end('NOT FOUND');
});

/* Start the server on port 3030 */
const server = app.listen(3030, () => {
  console.log('Api: Listening at localhost:%s', server.address().port);
});

/* Export the server and app so other programs may start an instance */
module.exports = {
  server,
  app
};
