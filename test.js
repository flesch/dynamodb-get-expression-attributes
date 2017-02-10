'use strict';

const assert = require('assert');
const parseExpression = require('./index');

const expectedParams = {
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

const data = { user:'123456', start:'2017-02-01', end: '2017-03-01' };

const parsedParams = parseExpression({
  TableName: 'sessions',
  FilterExpression: '#user = :user and #date between :start and :end',
  ProjectionExpression: '#date, #user, #session'
}, data);

assert.deepEqual(expectedParams, parsedParams);
