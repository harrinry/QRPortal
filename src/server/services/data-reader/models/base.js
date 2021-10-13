class Base {
  constructor(data = {}){
    this.id = (data.id !== undefined || data.id !== null) ? data.id : "";
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