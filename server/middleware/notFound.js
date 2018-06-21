const logger = require('../logger/error');

function notFound(req, res) {
  logger.warn(
    'Unhandled resource',
    {
      statusCode: 404,
      error: 'Unknown resource',
      resource: req.originalUrl
    }
  );

  return res.status(404).send('Not Found');
}

module.exports = notFound;