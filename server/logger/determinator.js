const appRoot = require('app-root-path');
const winston = require('winston');

const determinatorLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: appRoot.resolve('logs/determinator.log'),
      level: 'info',
      maxsize: 2.5e+7
    })
  ],
  exitOnError: false
});

module.exports = determinatorLogger;