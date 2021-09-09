const IocBuilder = require("./ioc-builder");

function createIocBuilder(){
  return new IocBuilder();
}

module.exports = createIocBuilder;