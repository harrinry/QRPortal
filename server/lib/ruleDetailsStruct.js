const Struct = require('./dataConstruct/struct');
const fs = require('fs');
const root = require('app-root-path');
const TechnologiesMap = require('./technologies-map');
const UniqueArray = require('../lib/uniq');

const QualityRule = Struct(
  'id',
  'name',
  'href',
  'critical',
  'maxWeight',
  'associatedValueName',
  'description',
  'output',
  'rationale',
  'remediation',
  'total',
  'businessCriteria',
  'technicalCriteria',
  'technologies',
  'qualityStandards'
);

const MapTechnology = (technology) => {

  const technologyIndexInMap = TechnologiesMap.findIndex(t => t.name === technology),
    tl = TechnologiesMap.length;

  if (technologyIndexInMap > -1) {
    return TechnologiesMap[technologyIndexInMap];
  }

  for (let i = 0; i < tl; i++) {
    const _Technology = TechnologiesMap[i];
    if (_Technology.glob === null) continue;
    const globIndex = _Technology.glob.findIndex( t => t.name === technology);
    
    if( globIndex > -1 ) return _Technology;
  }

  return null;
};

const QualityRuleObject = (data) => {
  return new QualityRule(
    data.id,
    data.name,
    data.href,
    data.critical,
    data.maxWeight,
    data.associatedValueName,
    data.description,
    data.output,
    data.rational,
    data.remediation,
    data.total,
    data.businessCriteria,
    data.technicalCriteria,
    UniqueArray(data.technologies.map(t => MapTechnology(t.name)).filter(e => e !== undefined && e !== null), (val) => val.name),
    data.qualityStandards
  );
};

const ProcessRuleDetailsRequest = ( req, res, errorHandler ) => {
  const jsonReg = /.json/i,
    url = jsonReg.test(req.url) ? req.url : req.url + '.json';
  fs.readFile(root.resolve('/rest/AIP/' + url), (err, dataBuffer) => {
    if(err){
      errorHandler(err, res);
    }
    const data = JSON.parse(dataBuffer);
    res.json(
      QualityRuleObject(data)
    );
  });
};

const getRulesDetailsFromFile = ( filePath ) => {
  if(!fs.existsSync(filePath)) return {};
  const fileData = fs.readFileSync(filePath),
    data = JSON.parse(fileData);

  return QualityRuleObject(data);
};

module.exports = {
  ProcessRuleDetailsRequest,
  getRulesDetailsFromFile
};