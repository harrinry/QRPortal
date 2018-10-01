const logger = require('../logger/error');
const path = require('path');
function notFound(req, res) {
  logger.warn(
    'Unhandled resource',
    {
      statusCode: 404,
      error: 'Unknown resource',
      resource: req.originalUrl
    }
  );
  res.set('html');
  return res.status(404).sendFile(path.resolve(__dirname, '..', '404', 'index.html'));
}

module.exports = notFound;