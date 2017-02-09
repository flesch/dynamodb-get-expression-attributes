# dynamodb-get-expression-attributes

A simple utility to split an `object` into `ExpressionAttributeNames` and `ExpressionAttributeValues` for use in a DynamoDB query.

Instead of this:

```js
const params = {
  TableName: 'Movies',
  KeyConditionExpression: '#year = :year',
  ExpressionAttributeNames:{
    '#yr': 'year'
  },
  ExpressionAttributeValues: {
    ':year': 1985
  }
};
```

You can do this:

```js
const getExpressionAttributes = require('dynamodb-get-expression-attributes');

const params = Object.assign({
  TableName: 'Movies',
  KeyConditionExpression: '#year = :year'
}, getExpressionAttributes({
  year: 1985
}));

// Object Rest/Spread
// https://github.com/sebmarkbage/ecmascript-rest-spread
// http://babeljs.io/docs/plugins/transform-object-rest-spread/
// const params = {
//   TableName: 'Movies',
//   KeyConditionExpression: '#year = :year',
//   ...getExpressionAttributes({ year:1985 })
// };
```

## Install

```bash
$ npm install --save dynamodb-get-expression-attributes
```

## Test

```bash
$ npm test
```

## Limitations

* The attribute name and value keys are assumed to be the same. A `KeyConditionExpression` like `#yr = :yyyy` won't work.

## License

(The MIT License)

Copyright (c) 2017 [John Flesch](http://fles.ch).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
