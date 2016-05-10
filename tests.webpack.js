var path = require('path');
/* Include all our test paths */
const context = require.context('./src', true, /Test\.js$/);
context.keys().forEach(context);
