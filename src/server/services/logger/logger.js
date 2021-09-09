const { loggerFactory, logLevel, consoleTransportFactory } = require("../../lib/cnjs-utils/log");

/**
 * @param {import("./folder-service/folder-service")} fld 
 */
function logFactory(){
  return loggerFactory([
    consoleTransportFactory(logLevel.debug, true),
  ]);
}

module.exports = logFactory;