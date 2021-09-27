const Cache = require("../../lib/data-cache");
const { TimeConverter } = require("../../lib/cnjs-utils/lib/time-converter");

class SSOCache extends Cache {
  constructor(){
    super();

    this.setLifeCycle(new TimeConverter().addDays(1).toMilliseconds());
  }

  get(uid){
    if(!this.isDataSet()) return null;

    return this.data[uid];
  }

  store(uid, data = {}){
    if(!this.isDataSet()) this.setData({});
    if(!this.data[uid]) this.data[uid] = data;
  }
}

module.exports = SSOCache;