const { createIocBuilder } = require("../lib/cnjs-utils/services/ioc-container");
const types = require("./types");
const { FolderService, types: fldTypes } = require("../services/folder-service");
const { DataReader, types: drTypes } = require("../services/data-reader");
const { TechnologyDataReader } = require("../services/technology-reader");
const { QualityStandardsDataReader } = require("../services/quality-standard-reader");
const { QualityRuleDataReader, PublicQualityRuleSearchIndex, PrivateQualityRuleSearchIndex } = require("../services/quality-rule-reader");
const { ExtensionDataReader } = require("../services/extension-service");
const { Serializer } = require("../services/data-serializer");
const { IconURLBuilder } = require("../services/icon-url-builder");
const { RulesDocumentationServer } = require("../server");
const { logFactory } = require("../services/logger");
const { HttpErrorFactory } = require("../services/http-error-service");
const { ApiController, QualityRulesController, SwaggerUIController, AIPServiceController, CARLServiceController, TechnologyController, 
  QualityStandardController, ExtensionController, BusinessCriteriaController, IndexController, TechnicalCriteriaController, SSOController } = require("../controllers");
const { BusinessCriteriaDataReader } = require("../services/business-criteria-reader");
const { TechnicalCriteriaDataReader } = require("../services/technical-criteria-reader");
const { SSOCache, passportConfigure, ExtendAuthWebClient } = require("../services/extend-authentication-service");
const uuid = require("uuid");

const iocBuilder = createIocBuilder();

iocBuilder
  // folder service
  .register(types.folderService, FolderService)

  // server version
  .registerConstant(types.serverVersion, "2.0.0")

  // server port
  .registerConstant(types.serverPort, process.env.PORT || 8080)

  // session key
  .registerConstant(types.sessionKey, uuid.v4())

  // extend url
  .registerConstant(types.extendUrl, "https://extend.castsoftware.com")

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

  // sso cache
  .registerSingleton(types.ssoCache, () => new SSOCache())

  // extend web client
  .registerFactory(types.extendWebClient, (context) => {
    const cntr = context.container;

    return new ExtendAuthWebClient(cntr.get(types.extendUrl));
  })

  // passport configure
  .registerFactory(types.passportConfigure, (context) => {
    const cntr = context.container;
    const webClient = cntr.get(types.extendWebClient);
    const sessionKey = cntr.get(types.sessionKey);
    const ssoCache = cntr.get(types.ssoCache);

    return () => passportConfigure(webClient, sessionKey, ssoCache);
  })

  // Data Readers
  .registerFactory(types.restDataReader, (context) => {
    const cntr = context.container;
    const folderService = cntr.get(types.folderService);
    const serializer = cntr.get(types.serializer);

    const dataReader = new DataReader(folderService.get(fldTypes.restIndex), "/api", serializer);

    return dataReader;
  })
  .registerFactory(types.aipDataReader, (context) => {
    const cntr = context.container;
    const folderService = cntr.get(types.folderService);
    const serializer = cntr.get(types.serializer);

    return new DataReader(folderService.get(fldTypes.restAip), drTypes.aip, serializer);
  })
  .registerFactory(types.carlDataReader, (context) => {
    const cntr = context.container;
    const folderService = cntr.get(types.folderService);
    const serializer = cntr.get(types.serializer);

    return new DataReader(folderService.get(fldTypes.restCarl), drTypes.carl, serializer);
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
  .registerFactory(types.aipBusinessCriteriaDataReader, (context) => {
    const cntr = context.container;
    const dataReader = cntr.get(types.aipDataReader);
    const serializer = cntr.get(types.serializer);

    return new BusinessCriteriaDataReader(dataReader, serializer);
  })
  .registerFactory(types.carlBusinessCriteriaDataReader, (context) => {
    const cntr = context.container;
    const dataReader = cntr.get(types.carlDataReader);
    const serializer = cntr.get(types.serializer);

    return new BusinessCriteriaDataReader(dataReader, serializer);
  })
  .registerFactory(types.aipTechnicalCriteriaDataReader, (context) => {
    const cntr = context.container;
    const dataReader = cntr.get(types.aipDataReader);
    const serializer = cntr.get(types.serializer);

    return new TechnicalCriteriaDataReader(dataReader, serializer);
  })
  // .registerFactory(types.carlTechnicalCriteriaDataReader, (context) => {
  //   const cntr = context.container;
  //   const dataReader = cntr.get(types.carlDataReader);
  //   const serializer = cntr.get(types.serializer);

  //   return new TechnicalCriteriaDataReader(dataReader, serializer);
  // })
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

  // Quality Rule Search Index
  .registerSingleton(types.searchIndex.public, (context) => {
    const cntr = context.container;
    const fldService = cntr.get(types.folderService);
    const qualityRuleReader = cntr.get(types.qualityRuleDataReader);

    return new PublicQualityRuleSearchIndex(fldService, qualityRuleReader);
  })
  .registerSingleton(types.searchIndex.private, (context) => {
    const cntr = context.container;
    const fldService = cntr.get(types.folderService);
    const qualityRuleReader = cntr.get(types.qualityRuleDataReader);

    return new PrivateQualityRuleSearchIndex(fldService, qualityRuleReader);
  })

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
  .registerFactory(types.controllers.aip.businessCriteria, (context) => {
    const cntr = context.container;
    return new BusinessCriteriaController(cntr.get(types.logger), cntr.get(types.aipBusinessCriteriaDataReader));
  })
  .registerFactory(types.controllers.carl.businessCriteria, (context) => {
    const cntr = context.container;
    return new BusinessCriteriaController(cntr.get(types.logger), cntr.get(types.carlBusinessCriteriaDataReader));
  })
  .registerFactory(types.controllers.aip.index, (context) => {
    const cntr = context.container;
    return new IndexController(cntr.get(types.logger), cntr.get(types.aipBusinessCriteriaDataReader));
  })
  .registerFactory(types.controllers.carl.index, (context) => {
    const cntr = context.container;
    return new IndexController(cntr.get(types.logger), cntr.get(types.carlBusinessCriteriaDataReader));
  })
  .registerFactory(types.controllers.aip.technicalCriteria, (context) => {
    const cntr = context.container;
    return new TechnicalCriteriaController(cntr.get(types.logger), cntr.get(types.aipTechnicalCriteriaDataReader));
  })
  // .registerFactory(types.controllers.carl.technicalCriteria, (context) => {
  //   const cntr = context.container;
  //   return new TechnicalCriteriaController(cntr.get(types.logger), cntr.get(types.carlTechnicalCriteriaDataReader));
  // })
  .register(types.controllers.ssoController, SSOController, [types.logger, types.sessionKey, types.ssoCache])
  .register(types.controllers.carlServiceIndex, CARLServiceController, [types.logger, types.carlDataReader,
    types.controllers.carl.technology, types.controllers.carl.qualityStandard, types.controllers.carl.businessCriteria, 
    types.controllers.carl.index])
  .register(types.controllers.aipServiceIndex, AIPServiceController, [types.logger, types.aipDataReader,
    types.controllers.aip.technology, types.controllers.aip.qualityStandard, types.controllers.aip.extension, 
    types.controllers.aip.businessCriteria, types.controllers.aip.index, types.controllers.aip.technicalCriteria])
  .register(types.controllers.qualityRules, QualityRulesController, [types.logger, types.qualityRuleDataReader, types.searchIndex.public, types.searchIndex.private])
  .register(types.controllers.api, ApiController, [types.logger, types.restDataReader,  types.controllers.swaggerui, 
    types.controllers.aipServiceIndex, types.controllers.carlServiceIndex, types.controllers.qualityRules, types.controllers.ssoController])
  
  .register(types.server, RulesDocumentationServer, [types.logger, types.serverVersion, types.serverPort, 
    types.httpErrorFactory, types.controllers.api, types.passportConfigure]);

module.exports = iocBuilder.getContainer();