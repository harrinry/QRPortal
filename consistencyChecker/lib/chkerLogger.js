const appRoot = require('app-root-path');
const winston = require('winston');

const consistencyCheckerLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: appRoot.resolve('consistencyChecker/reports/checker.log'),
      level: 'info',
      maxsize: 2.5e+7
    })
  ],
  exitOnError: false
});

module.exports = consistencyCheckerLogger;