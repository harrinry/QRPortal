module.exports = {
  name: 'quality-rules/....json',
  identifier: /((quality-rules)(\/|\\).+\.json)/gi,
  type: 'object',
  props:[
    {name: 'id', type: 'number'},
    {name: 'name', type: 'string'},
    {name: 'href', type: 'string'},
    {name: 'critical', type: 'boolean'},
    {name: 'maxWeight', type: 'number'},
    {name: 'associatedValueName', type: 'string'},
    {name: 'description', type: 'string'},
    {name: 'output', type: 'string'},
    {name: 'rationale', type: 'string'},
    {name: 'remediation', type: 'string'},
    {name: 'businessCriteria', type: 'array', method: 'duplicateCheck'},
    {name: 'technicalCriteria', type: 'array', method: 'duplicateCheck'},
    {name: 'technologies', type: 'array', method: 'duplicateCheck'},
    {name: 'qualityStandards', type: 'array', method: 'duplicateCheck'},
  ],
  reportFile: 'rest-quality-rules'
};