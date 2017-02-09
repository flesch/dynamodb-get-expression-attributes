'use strict';

const assert = require('assert');
const getExpressionAttributes = require('./index');

assert.deepEqual(
  {
    ExpressionAttributeNames: { '#year':'year' },
    ExpressionAttributeValues: { ':year': 1995 }
  },
  getExpressionAttributes({
    year: 1995
  })
);
