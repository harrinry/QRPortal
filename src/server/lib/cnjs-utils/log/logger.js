const logLevel = {
  emerg: "emerg",
  alert: "alert",
  crit: "clit",
  error: "error",
  warning: "warning",
  notice: "notice",
  info: "info",
  debug: "debug",
};

/**
 * @param {string} name 
 * @param {string} extension 
 */
function dailyRotateFilename(name){
  return `${name}-%DATE%`;
}

function fileTransportFactory(level, filePath, handleExceptions, strictLevel = false){
  const FileTransport = require("./file-transport");

  return new FileTransport({
    strict: strictLevel,
    level: level,
    filename: filePath,
    handleExceptions: handleExceptions,
    maxsize: 2.5e+7,
  });
}
  
function consoleTransportFactory(level, handleExceptions, strictLevel = false){
  const ConsoleTransport = require("./console-transport");

  return new ConsoleTransport({
    strict: strictLevel,
    level: level,
    handleExceptions: handleExceptions,
  });
}

function dailyRotationFileTransportFactory(level, filePath, handleExceptions, strictLevel = false){
  const DailyRotateFileTransport = require("./daily-rotate-file-transport");
  
  return new DailyRotateFileTransport({
    strict: strictLevel,
    level,
    filename: filePath,
    datePattern: "YYYY-MM-DD",
    handleExceptions: handleExceptions,
    maxSize: 2.5e+7,
    extension: ".log",
  });
}

/**
 * @param {winston.LoggerOptions} options 
 * @param  {winston.transports[]} transports 
 */
function loggerFactory(options = {}, transports = []){
  const winston = require("winston");

  if (Array.isArray(options)) {
    transports = options;
    options = {};
  }

  return winston.createLogger({
    levels: winston.config.syslog.levels,
    format: winston.format.combine(
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf((info) => {
        return `${info.timestamp} ${info.level.toUpperCase()} - ${info.message}`;
      }),
    ),
    transports,
    exitOnError: false,
    ...options,
  });
}

module.exports = {
  dailyRotateFilename,
  loggerFactory,
  logLevel,
  dailyRotationFileTransportFactory,
  consoleTransportFactory,
  fileTransportFactory,
};