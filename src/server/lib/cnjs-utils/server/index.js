if (!Reflect.defineMetadata) require("reflect-metadata");

module.exports = {
  ...require("./controller"),
  ...require("./server"),
  ...require("./static-controller"),
  ...require("./http-error"),
  httpErrorLib: require("./http-error-v2"),
  middleware: require("./middleware"),
};