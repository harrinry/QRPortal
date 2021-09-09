const TextReader = require("./text-reader");
const { parseBool } = require("./boolean-lib");

class PropertyReader extends TextReader {

  constructor(buffer){
    super(buffer);

    this.properties = {};

    this.__parseProperties();
  }

  __parseProperties(){
    const lines = this.readLines().map(_ => _.toString("utf8"));

    for (const line of lines) {
      if (!line.includes("=")) continue;
      let [ key, value ] = line.split("=");
      
      this.properties[key.trim()] = this.__valueParser(value);
    }
  }

  /**
   * @param {string} value
   * @returns {string|number|boolean}
   */
  __valueParser(value){
    let output = value;

    if (value.toLowerCase() === "true" || value.toLowerCase() === "false") output = parseBool(value);
    else if (!isNaN(value) && (typeof value !== "boolean")) output = parseFloat(value);
    else if (/"|'/gi.test(value)) output = value.replace(/'|"/gi, "").trim();

    return output;
  }

  /**
   * @param {string} key
   * @param {(value: string) => any} parser
   */
  readProperty(key, parser){
    return parser ? parser(this.properties[key]) : this.properties[key];
  }

  getProperties(){
    return this.properties;
  }
}

module.exports = PropertyReader;