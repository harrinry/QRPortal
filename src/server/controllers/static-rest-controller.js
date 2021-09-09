const { StaticController } = require("../lib/cnjs-utils/server");

class StaticRestController extends StaticController{

  /**
   * @param {import("winston").Logger} logger
   * @param {string} dir
   */
  constructor(logger, dir){
    super("/rest", {
      dir,
      catchFallthrough: (_req, res) => res.sendStatus(404),
    });
    this.logger = logger;
  }

  $postprocess(){
    this.logger.info(`${this.constructor.name} Initialized`);
  }
}

module.exports = StaticRestController;