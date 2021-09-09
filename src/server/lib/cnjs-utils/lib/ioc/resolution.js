
class IOCResolution{
  constructor(type, id, invokable, dependencies){
    this.id = id;
    this.invokable = invokable;
    this.dependencies = dependencies || [];
    this.type = type;
    this.instance = null;
  }
}

module.exports = IOCResolution;