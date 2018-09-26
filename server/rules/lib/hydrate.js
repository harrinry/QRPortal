const struct = require('../../lib/dataConstruct/struct');
const generatePath = require('./pathGenerator');
const Hbj = new struct( 'path', 'rules', 'cmp', 'search' );

function createHydrate( queryParams ){
  const { sec, ref, s, cmp } = queryParams;
  
  const PATH = generatePath(sec);


  return new Hbj( PATH, '', '', s );
}

module.exports = createHydrate;