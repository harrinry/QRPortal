const lib = require("./lib");
const util = require("util");
const path = require("path");
const fs = require("fs");

class FolderService {

  constructor(currentDir){
    this.dirs = new Map();
    this.dirs.set("root", lib.getProjectRoot(currentDir));
  }

  /**
 * @param {string} pathLike 
 */
  envPath(pathLike){
    const rgx = new RegExp("%\\w{1,}%", "gi");
    const match = rgx.exec(pathLike);

    if (match){
      const envMatch = match[0].replace(/\%/gi, "");

      for (const env in process.env) {
        if (env.toLowerCase() === envMatch.toLowerCase()) {
          return path.resolve(pathLike.replace(match[0], process.env[env]));
        }
      }
    }

    return pathLike;
  }

  /**
   * @param {string} type 
   * @param {string} directory 
   */
  add(type, directory){
    this.dirs.set(type, this.envPath(directory));
  }

  /**
   * @param {string} type 
   */
  get(type){
    return this.dirs.get(type);
  }

  getRoot(){
    return this.get("root");
  }

  /**
   * @param  {...string} _path 
   */
  fromRoot(..._path){
    return path.join(this.getRoot(), ..._path);
  }

  /**
   * @param {string} type 
   * @param  {...string} _path 
   */
  from(type, ..._path){
    return path.join(this.get(type), ..._path);
  }

  async setup(){
    for (const folderPath of this.dirs.values()) {
      if (path.extname(folderPath)) continue;
      try {
        await util.promisify(fs.stat)(folderPath);
      } catch (error) {
        await util.promisify(fs.mkdir)(folderPath, { recursive: true });
      }
    }
  }
}

module.exports = FolderService;