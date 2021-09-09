class Base {
  constructor(data = {}){
    this.id = data.id || "";
    this.name = data.name || "";
    this.href = data.href || "";
  }

  toApiOutput(){
    return {
      id: this.id,
      name: this.name,
    };
  }
}

module.exports = Base;