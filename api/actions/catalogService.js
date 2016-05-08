const products = [
  { uniqueId: 'sports-arsenal', catogary: 'sports', value: 'arsenal', displayText: 'Arsenal TV', location: {LONDON: true} }, //eslint-disable-line
  { uniqueId: 'sports-chelsea', catogary: 'sports', value: 'chelsea', displayText: 'Chelsea TV', location: {LONDON: true} }, //eslint-disable-line
  { uniqueId: 'sports-liverpool', catogary: 'sports', value: 'liverpool', displayText: 'Liverpool TV', location: {LIVERPOOL: true} }, //eslint-disable-line
  { uniqueId: 'sky-news', catogary: 'news', value: 'sky-news', displayText: 'Sky News' },
  { uniqueId: 'sky-sports', catogary: 'news', value: 'sky-sports', displayText: 'Sky Sports' }
];

function resolveProducts(locationID) {
  const returnedProducts = [];
  /* Add the products and filter by location */
  products.forEach((product) => {
    if (product.location) {
      if (product.location[locationID]) {
        returnedProducts.push(product);
      }
    } else {
      returnedProducts.push(product);
    }
  });
  return { products: returnedProducts };
}

export default function catalogService(locationID) {
  return new Promise((resolve, reject) => {
    if (!locationID) {
      reject({ err: 'This service requires a valid locationID.' });
    } else {
      resolve(resolveProducts(locationID));
    }
  });
}
