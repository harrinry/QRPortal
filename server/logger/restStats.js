const appRoot = require('app-root-path');
const winston = require('winston');

const RestStatLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: appRoot.resolve('logs/restStatistics.log'),
      level: 'info',
      maxsize: 2.5e+7
    })
  ],
  exitOnError: false
});

module.exports = RestStatLogger;