const { createIocBuilder } = require("../lib/cnjs-utils/services/ioc-container");
const types = require("./types");
const { FolderService, types: fldTypes } = require("../services/folder-service");
const { DataReader, types: drTypes } = require("../services/data-reader");
const { TechnologyDataReader } = require("../services/technology-reader");
const { QualityStandardsDataReader } = require("../services/quality-standard-reader");
const { QualityRuleDataReader } = require("../services/quality-rule-reader");
const { ExtensionDataReader } = require("../services/extension-service");
const { Serializer } = require("../services/data-serializer");
const { IconURLBuilder } = require("../services/icon-url-builder");
const { RulesDocumentationServer } = require("../server");
const { logFactory } = require("../services/logger");
const { HttpErrorFactory } = require("../services/http-error-service");
const { ApiController, QualityRulesController, SwaggerUIController, AIPServiceController, CARLServiceController, TechnologyController, 
  QualityStandardController, ExtensionController } = require("../controllers");

const iocBuilder = createIocBuilder();

iocBuilder
  // folder service
  .register(types.folderService, FolderService)

  // server version
  .registerConstant(types.serverVersion, "2.0.0")

  // server port
  .registerConstant(types.serverPort, process.env.PORT || 8080)

  // logger
  .registerFactory(types.logger, logFactory)

  // http error factory
  .registerConstant(types.httpErrorFactory, HttpErrorFactory)

  // iconUrl builder
  .registerFactory(types.iconUrlBuilder, () => {
    return new IconURLBuilder("https://raw.githubusercontent.com/CAST-Extend/resources/master", "png");
  })
  .registerFactory(types.iconUrlBuilderLocal, () => {
    return new IconURLBuilder("https://raw.githubusercontent.com/CAST-Extend/resources/master/techportal", "svg");
  })

  // Data Readers
  .registerFactory(types.restDataReader, (context) => {
    const cntr = context.container;
    const folderService = cntr.get(types.folderService);
    const dataReader = new DataReader(folderService.get(fldTypes.restIndex));

    return dataReader;
  })
  .registerFactory(types.aipDataReader, (context) => {
    const cntr = context.container;
    const folderService = cntr.get(types.folderService);

    return new DataReader(folderService.get(fldTypes.restAip), drTypes.aip);
  })
  .registerFactory(types.carlDataReader, (context) => {
    const cntr = context.container;
    const folderService = cntr.get(types.folderService);

    return new DataReader(folderService.get(fldTypes.restCarl), drTypes.carl);
  })
  .registerFactory(types.aipTechnologyDataReader, (context) => {
    const cntr = context.container;
    const folderService = cntr.get(types.folderService);

    return new TechnologyDataReader(folderService.get(fldTypes.mapping), cntr.get(types.aipDataReader), cntr.get(types.iconUrlBuilder));
  })
  .registerFactory(types.carlTechnologyDataReader, (context) => {
    const cntr = context.container;
    const folderService = cntr.get(types.folderService);

    return new TechnologyDataReader(folderService.get(fldTypes.mapping), cntr.get(types.carlDataReader), cntr.get(types.iconUrlBuilder));
  })
  .registerFactory(types.aipQualityStandardReaderService, (context) => {
    const cntr = context.container;
    const dataReader = cntr.get(types.aipDataReader);
    const serializer = cntr.get(types.serializer);

    return new QualityStandardsDataReader(dataReader, serializer);
  })
  .registerFactory(types.carlQualityStandardReaderService, (context) => {
    const cntr = context.container;
    const dataReader = cntr.get(types.aipDataReader);
    const serializer = cntr.get(types.serializer);

    return new QualityStandardsDataReader(dataReader, serializer);
  })
  .registerFactory(types.qualityRuleDataReader, (context) => {
    const cntr = context.container;
    const dataReader = cntr.get(types.aipDataReader);
    const serializer = cntr.get(types.serializer);

    return new QualityRuleDataReader(dataReader, serializer);
  })
  .registerFactory(types.extensionDataReader, (context) => {
    const cntr = context.container;
    const dataReader = cntr.get(types.aipDataReader);
    const serializer = cntr.get(types.serializer);

    return new ExtensionDataReader(dataReader, serializer);
  })
  // serializers
  .register(types.serializer, Serializer, [types.iconUrlBuilderLocal])

  // service indexes

  // static controllers
  .registerFactory(types.controllers.swaggerui, (context) => {
    const cntr = context.container;
    const folderService = cntr.get(types.folderService);
    const logger = cntr.get(types.logger);

    return new SwaggerUIController(logger, folderService.get(fldTypes.doc));
  })
  // .registerFactory(types.controllers.staticRest, (context) => {
  //   const cntr = context.container;
  //   const folderService = cntr.get(types.folderService);
  //   const logger = cntr.get(types.logger);

  //   return new StaticRestController(logger, folderService.get(fldTypes.rest));
  // })
  // .registerFactory(types.controllers.restUi, (context) => {
  //   const cntr = context.container;
  //   const folderService = cntr.get(types.folderService);
  //   const logger = cntr.get(types.logger);

  //   return new StaticRestUIController(logger, folderService.get(fldTypes.rootStatic));
  // })

  // controllers
  .registerFactory(types.controllers.aip.technology, (context) => {
    const cntr = context.container;
    return new TechnologyController(cntr.get(types.logger), cntr.get(types.aipTechnologyDataReader));
  })
  .registerFactory(types.controllers.carl.technology, (context) => {
    const cntr = context.container;
    return new TechnologyController(cntr.get(types.logger), cntr.get(types.carlTechnologyDataReader));
  })
  .registerFactory(types.controllers.aip.qualityStandard, (context) => {
    const cntr = context.container;
    return new QualityStandardController(cntr.get(types.logger), cntr.get(types.aipQualityStandardReaderService));
  })
  .registerFactory(types.controllers.carl.qualityStandard, (context) => {
    const cntr = context.container;
    return new QualityStandardController(cntr.get(types.logger), cntr.get(types.carlQualityStandardReaderService));
  })
  .registerFactory(types.controllers.aip.extension, (context) => {
    const cntr = context.container;
    return new ExtensionController(cntr.get(types.logger), cntr.get(types.extensionDataReader));
  })
  .register(types.controllers.carlServiceIndex, CARLServiceController, [types.logger, types.carlDataReader, types.controllers.carl.technology, types.controllers.carl.qualityStandard])
  .register(types.controllers.aipServiceIndex, AIPServiceController, [types.logger, types.aipDataReader, types.controllers.aip.technology, types.controllers.aip.qualityStandard, types.controllers.aip.extension])
  .register(types.controllers.qualityRules, QualityRulesController, [types.logger, types.qualityRuleDataReader, types.httpErrorFactory])
  .register(types.controllers.api, ApiController, [types.logger, types.restDataReader, types.controllers.swaggerui, types.controllers.aipServiceIndex, 
    types.controllers.carlServiceIndex, types.controllers.qualityRules])
  
  .register(types.server, RulesDocumentationServer, [types.logger, types.serverVersion, types.serverPort, 
    types.httpErrorFactory, types.controllers.api]);

module.exports = iocBuilder.getContainer();