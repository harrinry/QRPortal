module.exports = {
  name: 'versions.json',
  identifier: /(versions\.json)/gi,
  type: 'array',
  itemProps:[
    {name: 'name', type: 'string'},
    {name: 'href', type: 'string'}
  ],
  reportFile: 'extension-versions-list'
};