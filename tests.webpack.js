var path = require('path');

const context = require.context('./src', true, /Test\.js$/);
context.keys().forEach(context);
