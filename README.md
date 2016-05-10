# product-selection
A demo application for a product selection page. The App Uses React with Redux on the client and has an express API.
Tests use Mocha with Chai Assertion, supertask for async and react-addons-test-utils for testing components.

## Installation
```bash
git clone git@github.com:rickyH/product-selection.git
cd product-selection/
npm install
```
## Running tests
### API TESTS
API (Caution) make sure the application isn't running when you run the API test scripts, stop this service to run the application.

```bash
npm run test-api
```

### CLIENT TESTS
Client tests currently only use PhantomJS however karma-chrome-launcher is provided.
```bash
npm test
```

### Client Tests
```bash
# Note you can leave this running
npm test
```

## Running the application
Please kill the API test server before running this application
```bash
npm start
```

Alternatively for better debugging run the API and dev-server separately
```bash
npm run dev-server
# Then in a separate terminal instance
npm run api-test
```

## Viewing the application
Visit [http://localhost:5000](http://localhost:5000) to view the application

### Setting the customerID cookie
On the home page there are two buttons that will set the customerID,
this is a requirement for the product page.

## Remaining tasks
* Create a production version (not use a webkit-dev-server).
* Fix webkit loaders to allow sass @import.
* Fade in page when loading is true to avoid flicker.
* Add a method for removing an item from the basket
* Make the application stylesheets fully responsive.
* Add container tests.
* Add Reducer tests to confirmation.
* Add tests for actions.
* Resolve npm dependencies errors.
* Run the API tests on another port.
* Add a config file for the location and port settings.
* Update Helmet meta/title for each page.
* Hide UI when state is set to loading (Show Spinner).
* Tidy and Comment.
