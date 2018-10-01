const struct = require('../../lib/dataConstruct/struct');
const generatePath = require('./pathGenerator');
const generateRules = require('./rqGenerator');
const standardize = require('./standardizeParams');
const Hbj = new struct( 'path', 'data', 'search' );

function createHydrate( queryParams ){
  const params = standardize( queryParams );
  const { sec, ref, s } = params;
  let PATH, RULES;

  if (!s) {
    PATH = generatePath(sec),
    RULES = generateRules(ref, PATH);
  }

  return new Hbj( PATH, RULES, s );
}

module.exports = createHydrate;