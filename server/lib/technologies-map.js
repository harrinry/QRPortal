const technologies = require('../../rest/technologies.json');
const technoFilter = require('./filters');

const technoMapping = technoFilter( technologies );

module.exports = technoMapping;
