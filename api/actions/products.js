const products = [
  { uniqueId: 'sports-arsenal', catogary: 'sports', value: 'arsenal', displayText: 'Arsenal TV' },
  { uniqueId: 'sports-chelsea', catogary: 'sports', value: 'chelsea', displayText: 'Chelsea TV' },
  { uniqueId: 'sports-liverpool', catogary: 'sports', value: 'liverpool', displayText: 'Liverpool TV' }, //eslint-disable-line
  { uniqueId: 'sky-news', catogary: 'news', value: 'sky-news', displayText: 'Sky News' },
  { uniqueId: 'sky-sports', catogary: 'news', value: 'sky-sports', displayText: 'Sky Sports' }
];

function resolveProducts(cookie) {
  console.log('cookie', cookie);
  return { products };
}

export default function getProducts() {
  return new Promise((resolve, reject) => {
    const cookie = true;
    if (!cookie) {
      reject('You need a cookie to get the list of products.');
    } else {
      resolve(resolveProducts(cookie));
    }
  });
}
