
const fs = require("fs");
const util = require("util");
const path = require("path");

class StorageService {

  /**
   * @param {string} storageFolder 
   */
  constructor(storageFolder){
    this.storageFolder = storageFolder;
  }

  /**
   * @param {string} fileName
   * @param {Buffer} data 
   */
  store(fileName, data){
    return this.storeAt(this.storageFolder, fileName, data);
  }

  /**
   * @param {string} destination 
   * @param {string} fileName 
   * @param {Buffer} data 
   */
  storeAt(destination, fileName, data){
    return util.promisify(fs.writeFile)(path.join(destination, fileName), data);
  }

  /**
   * @param {string} fileName
   */
  pathTo(fileName){
    return path.join(this.storageFolder, fileName);
  }

  /**
   * @param {string} fileName
   */
  fileStats(fileName){
    return util.promisify(fs.stat)(this.pathTo(fileName));
  }

  /**
   * @param {string} fileName 
   */
  readStream(fileName){
    return fs.createReadStream(this.pathTo(fileName));
  }

  /**
   * @param {string} fileName 
   */
  writeStream(fileName){
    return fs.createWriteStream(this.pathTo(fileName));
  }

  /**
   * @param {string} fileName 
   */
  read(fileName){
    return util.promisify(fs.readFile)(this.pathTo(fileName));
  }

  /**
   * @param {string} fileName 
   */
  async exists(fileName){
    try {
      const stats = await this.fileStats(fileName);
      
      return !!stats;
    } catch (_error) {
      return false;
    }
  }

  /**
   * @param {string} fileName 
   * @param {string} destination 
   */
  copy(fileName, destination){
    return util.promisify(fs.copyFile)(this.pathTo(fileName), destination);
  }

  listFiles(){
    return util.promisify(fs.readdir)(this.storageFolder);
  }

  remove(fileName){
    return util.promisify(fs.unlink)(this.pathTo(fileName));
  }
}

module.exports = StorageService;