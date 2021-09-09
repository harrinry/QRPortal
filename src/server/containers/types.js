module.exports = {
  server: "server",
  serverVersion: "serverVersion",
  serverPort: "serverPort",

  logger: "logger",

  folderService: "folderService",
  storageService: "storageService",
  jsonFileReader: "jsonFileReader",

  aipDataReader: "aipDataReader",
  carlDataReader: "carlDataReader",
  restDataReader: "restDataReader",
  aipTechnologyDataReader: "aipTechnologyDataReader",
  carlTechnologyDataReader: "carlTechnologyDataReader",

  iconUrlBuilder: "iconUrlBuilder",
  iconUrlBuilderLocal: "iconUrlBuilderLocal",

  httpErrorFactory: "httpErrorFactory",

  serviceIndex: {
    aip: "aipServiceIndex",
    carl: "carlServiceIndex",
  },

  controllers: {
    api: "apiController",
    qualityRules: "QualityRulesController",
    swaggerui: "SwaggerUIController",
    staticRest: "StaticRestController",
    restUi: "StaticRestUIController",
    aipServiceIndex: "AIPServiceController",
    carlServiceIndex: "CARLServiceController",
    aip: {
      technology: "AIPTechnologyController",
    },
    carl: {
      technology: "CARLTechnologyController",
    }
  },
};