module.exports = {
  name: 'quality-rules.json',
  identifier: /(quality-rules\.json)/gi,
  type: 'array',
  itemProps:[
    {name: 'id', type: 'number'},
    {name: 'name', type: 'string'},
    {name: 'href', type: 'string'},
    {name: 'critical', type: 'boolean'}
  ],
  reportFile: 'quality-rule-links'
};