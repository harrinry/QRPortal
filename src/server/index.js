try {
  
  function logAndExit(logger, err){
    logger.error(`CRITICAL : ${err.stack}`);
    process.exit(1);
  }

  const { container, types } = require("./containers");

  /**
   * @type {import("./services/data-reader/service")}
   */
  const logger = container.get(types.logger);
  
  process.on("uncaughtException", (err) => {
    logAndExit(logger, err);
  });
  
  process.on("unhandledRejection", (err) => {
    logAndExit(logger, err);
  });

  /** @type {import("./server/server")} */
  const server = container.get(types.server);

  server.$init();
} catch (error) {
  console.log(error.message);
  console.log(error.stack);
}