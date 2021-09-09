const { Server } = require("../lib/cnjs-utils/server");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const { middleware } = require("../services/http-error-service");

class RulesDocumentationServer extends Server {
  
  constructor(logger, version, port, httpErrorFactory, apiController/*, staticRestController*/){
    super({
      logger,
      name: "Rules Documentation",
      bootMessage: (name, _port) => `${name} ${version} Service started on port ${_port}`,
      port,
      middleware: [
        helmet({
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              scriptSrc: ["'self'", "'unsafe-inline'"],
              scriptSrcAttr: null,
            }
          },
        }),
        cors(),
        middleware.setErrorLocale,
        bodyParser.urlencoded({ limit: "5mb", extended: true}),
        bodyParser.json({ limit: "5mb" }),
        (error, _req, res, next) => {
          if (error instanceof SyntaxError) {
            res.status(400).json(`Unable to parse request body, ${error.message}`);
          } else {
            next();
          }
        },
        cookieParser(),
      ],
    }, apiController);

    this.httpErrorFactory = httpErrorFactory;
  }

  // async $preprocess(){}

  async $postprocess(){
    this.app.use(middleware.errorHandlerMiddleware(this.httpErrorFactory, this.log));
  }
}

module.exports = RulesDocumentationServer;