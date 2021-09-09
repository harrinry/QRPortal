const { createIocBuilder } = require("../lib/cnjs-utils/services/ioc-container");
const types = require("./types");
const { FolderService, types: fldTypes } = require("../services/folder-service");
const { DataReader } = require("../services/data-reader");
const { TechnologyDataReader } = require("../services/technology-reader");
const { IconURLBuilder } = require("../services/icon-url-builder");
const { RulesDocumentationServer } = require("../server");
const { logFactory } = require("../services/logger");
const { HttpErrorFactory } = require("../services/http-error-service");
const { ApiController, QualityRulesController, StaticRestController, 
  SwaggerUIController, StaticRestUIController, AIPServiceController, CARLServiceController, TechnologyController } = require("../controllers");

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
    return new IconURLBuilder("/img", "svg");
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

    return new DataReader(folderService.get(fldTypes.restAip));
  })
  .registerFactory(types.carlDataReader, (context) => {
    const cntr = context.container;
    const folderService = cntr.get(types.folderService);

    return new DataReader(folderService.get(fldTypes.restCarl));
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
  // service indexes

  // static controllers
  .registerFactory(types.controllers.swaggerui, (context) => {
    const cntr = context.container;
    const folderService = cntr.get(types.folderService);
    const logger = cntr.get(types.logger);

    return new SwaggerUIController(logger, folderService.get(fldTypes.swaggerUi));
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
  .register(types.controllers.carlServiceIndex, CARLServiceController, [types.logger, types.carlDataReader, types.controllers.carl.technology])
  .register(types.controllers.aipServiceIndex, AIPServiceController, [types.logger, types.aipDataReader, types.controllers.aip.technology])
  .register(types.controllers.qualityRules, QualityRulesController, [types.logger, types.aipDataReader, types.httpErrorFactory])
  .register(types.controllers.api, ApiController, [types.logger, types.restDataReader, types.controllers.swaggerui, types.controllers.aipServiceIndex, 
    types.controllers.carlServiceIndex, types.controllers.qualityRules])
  
  .register(types.server, RulesDocumentationServer, [types.logger, types.serverVersion, types.serverPort, 
    types.httpErrorFactory, types.controllers.api]);

module.exports = iocBuilder.getContainer();