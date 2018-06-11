const { rules, images, api, determinator } = require('./routes');
const RULES = require('../rules/rules');
const IMGS = require('../images/imgRouter');
const API = require('../restApi/api');
const DETERMINATOR = require('../determinator/router');

module.exports = function initiateRouters( expressApp ){
  expressApp.use(rules, RULES);
  expressApp.use(images, IMGS);
  expressApp.use(api, API);
  expressApp.use(determinator, DETERMINATOR);
};