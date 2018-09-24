module.exports = {
  name: 'quality-rules.json',
  identifier: /(quality-rules\.json)/gi,
  type: 'array',
  itemProps:[
    {name: 'id', type: 'number'},
    {name: 'name', type: 'string'},
    {name: 'href', type: 'string', method: 'hrefCheck'},
    {name: 'status', type: ['string', 'object'], method: 'statusCheck'},
    {name: 'critical', type: 'boolean'}
  ],
  reportFile: 'quality-rule-links'
};