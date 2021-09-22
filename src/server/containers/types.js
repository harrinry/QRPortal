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

  qualityRuleDataReader: "qualityRuleDataReader",
  extensionDataReader: "extensionDataReader",

  aipTechnologyDataReader: "aipTechnologyDataReader",
  carlTechnologyDataReader: "carlTechnologyDataReader",

  aipQualityStandardReaderService: "aipQualityStandardReaderService",
  carlQualityStandardReaderService: "carlQualityStandardReaderService",

  iconUrlBuilder: "iconUrlBuilder",
  iconUrlBuilderLocal: "iconUrlBuilderLocal",

  httpErrorFactory: "httpErrorFactory",

  serviceIndex: {
    aip: "aipServiceIndex",
    carl: "carlServiceIndex",
  },

  serializer: "Serializer",

  controllers: {
    api: "apiController",
    qualityRules: "QualityRulesController",
    swaggerui: "SwaggerUIController",
    staticRest: "StaticRestController",
    restUi: "StaticRestUIController",
    aipServiceIndex: "AIPServiceController",
    carlServiceIndex: "CARLServiceController",
    aip: {
      extension: "AIPExtensionController",
      technology: "AIPTechnologyController",
      qualityStandard: "AIPQualityStandardController"
    },
    carl: {
      technology: "CARLTechnologyController",
      qualityStandard: "CARLQualityStandardController"
    }
  },
};