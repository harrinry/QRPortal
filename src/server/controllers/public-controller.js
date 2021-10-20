const { StaticController } = require("cnjs-utils/server");
// const { types: folderTypes } = require("../services/folder-service");
const path = require("path");
const fs = require("fs");
// const { publicUrl, documentStoreURL } = require("../config");
// const log = require("../log");

class PublicController extends StaticController{

  /**
   * @param {import("../config")} configuration
   * @param {import("winston").Logger} logger
   * @param {string} distributionFolder
   */
  constructor(logger, distributionFolder){
    super("/", {
      dir: distributionFolder,
      ignore: /(\/api)/i,
      spa: true,
    }, {
      dotfiles: "ignore",
      index: false,
      maxAge: "1d",
      redirect: false,
      setHeaders(res){
        res.set("x-timestamp", Date.now());
        res.set("x-sent", true);
      },
    });

    this._log = logger;
    this.indexFilePath = path.join(distributionFolder, "index.html");
  }

  $postprocess(){
    this._log.info(`${this.constructor.name} Initialized`);
  }

  $preprocess(){
    const log = this._log;

    if (fs.existsSync(this.indexFilePath)){
      const baseHtml = fs.readFileSync(this.indexFilePath);

      fs.writeFileSync(this.indexFilePath, baseHtml
        .toString()
        .replace(/(?<=<base\shref=")(.{0,})(?="\starget="_blank">)/ig, "/"));
      log.info("Public index file base url set to " + "/");
    }
  }
}

module.exports = PublicController;