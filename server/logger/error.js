const appRoot = require('app-root-path');
const winston = require('winston');

const errorLogger = winston.createLogger({
  level: ['error', 'warn'],
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: appRoot.resolve('logs/errors.log'),
      level: 'error',
      maxsize: 2.5e+7
    }),
    new winston.transports.File({
      filename: appRoot.resolve('logs/404errors.log'),
      level: 'warn',
      maxsize: 2.5e+7
    })
  ],
  exitOnError: false
});

module.exports = errorLogger;