const { StorageService } = require("../../lib/cnjs-utils/services/storage");
const { JsonFileNotFoundError, JsonFileParseError } = require("./exceptions");
const path = require("path");

class JsonFileReader extends StorageService {
  
  /**
   * @param {import("../folder-service/service")} folderService 
   */
  constructor(folder){
    super(folder);

    this.ext = ".json";
  }

  /**
   * @param  {...string} pathlike 
   */
  async read(...pathlike){
    const __path = [...pathlike];
    const l = __path.length;
    let fileName = __path[l - 1];
    let outpath = null;

    if(path.extname(fileName) !== this.ext) {
      fileName = fileName + this.ext;
      __path[l - 1] = fileName;
    }

    try {
      outpath = path.join(...__path);
      const buff = await super.read(outpath);
      const data = JSON.parse(buff.toString());

      return data
    } catch (error) {
      if(error instanceof SyntaxError){
        throw new JsonFileParseError(outpath);
      } else if(/ENOENT/gi.test(error.message)){
        throw new JsonFileNotFoundError(outpath);
      }
    }
  }
}

module.exports = JsonFileReader;