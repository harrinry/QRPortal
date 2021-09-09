class JsonFileNotFoundError extends Error {
  constructor(pathlike){
    super("JSON file not found matching " + pathlike);
  }
}

class JsonFileParseError extends SyntaxError {
  constructor(pathlike){
    super("JSON file parse failed due to incorrect syntax in file " + pathlike);
  }
}

module.exports = {
  JsonFileNotFoundError,
  JsonFileParseError,
};