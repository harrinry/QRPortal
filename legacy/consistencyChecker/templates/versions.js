module.exports = {
  name: 'versions.json',
  identifier: /(versions\.json)/gi,
  type: 'array',
  itemProps:[
    {name: 'name', type: 'string'},
    {name: 'href', type: 'string', method: 'hrefCheck'}
  ],
  reportFile: 'extension-versions-list'
};