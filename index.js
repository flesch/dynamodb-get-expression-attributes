'use strict';

const getExpressionAttributes = (obj) => {

  const attributes = Object.keys(obj);

  // { "#attribute": "attribute" }
  const ExpressionAttributeNames = Object.assign(...attributes.map(attribute => {
    return { [`#${attribute}`]: attribute };
  }));

  // { ":attribute": value }
  const ExpressionAttributeValues = Object.assign(...attributes.map(attribute => {
    return { [`:${attribute}`]: obj[attribute] };
  }));

  return { ExpressionAttributeNames, ExpressionAttributeValues };

};

module.exports = getExpressionAttributes;
