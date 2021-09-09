module.exports = {
  ...require("./builder"),
  ...require("./lib"),
  IOCContainer: require("./container"),
  IOCResolution: require("./resolution"),
  InternalTypes: require("./resolution-types"),
}