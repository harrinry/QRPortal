const { StaticController } = require("../lib/cnjs-utils/server");

class StaticRestUIController extends StaticController{

  /**
   * @param {import("winston").Logger} logger
   * @param {string} dir
   */
  constructor(logger, dir){
    super("/rest-ui", {
      dir: dir,
      catchFallthrough: (_req, res) => res.sendStatus(404),
    }, {
      index: "default.html"
    });

    this.logger = logger;
  }

  $postprocess(){
    this.logger.info(`${this.constructor.name} Initialized`);
  }
}

module.exports = StaticRestUIController;