const { Server } = require("../lib/cnjs-utils/server");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const { middleware } = require("../services/http-error-service");
const passport = require("passport");

class RulesDocumentationServer extends Server {
  
  constructor(logger, version, port, httpErrorFactory, apiController, passportConfigure){
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
        passport.initialize(),
      ],
    }, apiController);

    this.httpErrorFactory = httpErrorFactory;
    this.passportConfigure = passportConfigure;
  }

  $preprocess(){
    this.passportConfigure();
  }

  async $postprocess(){
    this.app.use(middleware.errorHandlerMiddleware(this.httpErrorFactory, this.log));
  }
}

module.exports = RulesDocumentationServer;