const helmet = require('helmet');
const { poweredByHeader } = require('./constants');
const cors = require('cors');

const corsSettings = {
  withCredentials: true
};

function initMiddleware( expressApp ){
  expressApp.use( helmet() );
  expressApp.disable( poweredByHeader );
  expressApp.use( cors( corsSettings ) );
  expressApp.use( ( req, res, next )=> {
    res.set({
      'access-control-allow-credentials': false,
      'access-control-allow-origin': '*'
    });
    next();
  });
}

module.exports = initMiddleware;