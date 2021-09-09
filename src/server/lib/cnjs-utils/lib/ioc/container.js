const { resolve } = require("./lib");

class IOCContainer{

  /**
   * @param {Set<import("./resolution")>} resolutions 
   */
  constructor(resolutions){
    this._store = new Map();
    
    for (const resolution of resolutions) {
      if(this._store.has(resolution.id)){
        throw new Error("cannot bind multiple multiple constructors to the same id, ids must be unique.");
      }

      this._store.set(resolution.id, resolution);
    }
  }

  get(id){
    if(!this._store.has(id)){
      throw new Error(`Unknown resolution id ${id}`);
    }
    return resolve(this._store.get(id), this);
  }
}

module.exports = IOCContainer;