# dynamodb-get-expression-attributes

A simple utility to extract the needed `ExpressionAttributeNames` and `ExpressionAttributeValues` from a DynamoDB `KeyConditionExpression`, `FilterExpression` and/or `ProjectionExpression` query/scan expression.

Instead of this:

```js
const params = {
  TableName: 'sessions',
  FilterExpression: '#user = :user and #date between :start and :end',
  ProjectionExpression: '#date, #user, #session',
  ExpressionAttributeNames: {
    '#user': 'user',
    '#date': 'date',
    '#session': 'session'
  },
  ExpressionAttributeValues: {
    ':user': '123456',
    ':start': '2017-02-01',
    ':end': '2017-03-01'
  }
};
```

You can do this:

```js
const getExpressionAttributes = require('dynamodb-get-expression-attributes');

const params = getExpressionAttributes({
  TableName: 'sessions',
  FilterExpression: '#user = :user and #date between :start and :end',
  ProjectionExpression: '#date, #user, #session'
}, { user:'123456', start:'2017-02-01', end:'2017-03-01' });
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

* The attribute name placeholders are assumed to be the same as the keys in your database. A `KeyConditionExpression` like `#yr = :yyyy` won't work.
* Only attribute names and values included in the "`data`" object are used. Defining a placeholder in only an expression but not "`data`" will not work.

## Changelog

* [v2.0.0](https://github.com/flesch/dynamodb-get-expression-attributes/releases/tag/v2.0.0): Creates `ExpressionAttributeNames` and `ExpressionAttributeValues` using a provided `KeyConditionExpression`, `FilterExpression` and/or `ProjectionExpression` and a "`data`" object.
* [v1.0.0](https://github.com/flesch/dynamodb-get-expression-attributes/releases/tag/v1.0.0): Creates `ExpressionAttributeNames` and `ExpressionAttributeValues` from a provided "`data`" object.

## License

(The MIT License)

Copyright (c) 2017 [John Flesch](http://fles.ch).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
