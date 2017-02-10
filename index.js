'use strict';

const getExpressionAttributes = (params, data) => {

  const expressions = ['KeyConditionExpression', 'FilterExpression', 'ProjectionExpression'].map(exp => params[exp]).filter(x => x);

  // #attribute
  const ExpressionAttributeNames = Object.assign(...expressions.map(expression => {
    const names = expression.match(/#([0-9A-Za-z_]+)/g) || [];
    return Object.assign({}, ...names.map(attribute => {
      return { [attribute]: attribute.replace(/^#/, '') };
    }));
  }), params.ExpressionAttributeNames || {});

  // :attribute
  const ExpressionAttributeValues = Object.assign(...expressions.map(expression => {
    const values = expression.match(/:([0-9A-Za-z_]+)/g) || [];
    return Object.assign({}, ...values.map(attribute => {
      return { [attribute]: data[attribute.replace(/^:/, '')] };
    }));
  }), params.ExpressionAttributeValues || {});

  return Object.assign(JSON.parse(JSON.stringify(params)), { ExpressionAttributeNames, ExpressionAttributeValues });

};

module.exports = getExpressionAttributes;
