const technologies = require('../../rest/AIP/technologies.json');
const technoFilter = require('./filters');

const technoMapping = technoFilter( technologies );
const technoMappingWithIcons = technoMapping.map( t => {
  return Object.assign({}, t, { icon: 'https://raw.githubusercontent.com/CAST-Extend/resources/master/'+ t.id +'.png' });
});

module.exports = {
  aip: technoMappingWithIcons
};
