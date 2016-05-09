# product-selection
A demo application for a product selection page.

## Installation
```bash
npm install
```
## Running tests
### API TEST
API (Caution) make sure the application isn't running when you run the API test scripts, stop this service to run the application.

```bash
npm run test-api
```

### Client Tests
```bash
// Note you can leave this running
npm test
```

## Running The App
```bash
npm start
```

## Viewing the application
Alternatively for better debugging run the API and dev-server separately
```bash
npm run dev-server
// Then in a separate instance
npm run api-test
```

## Viewing the application
Visit [http://localhost:5000](http://localhost:5000) to view the application

### Setting the customerID cookie
On the home page there are two buttons that set the customerID,
this is a requirement for the product page.

## Remaining tasks
* Create a production version (not use a webkit-dev-server).
* Fix webkit loaders to allow sass @import.
* Add a method for removing an item from the basket
* Make the application stylesheets fully responsive.
* Resolve npm dependencies errors.
* Run the API tests on another port.
* Add a config file for the location and port settings.
** Update Helmet meta/title for each page.
** Hide UI when state is set to loading (Show Spinner).
** Tidy and Comment.
** Fix all linting issues.
** Add Upgrade Guide.
