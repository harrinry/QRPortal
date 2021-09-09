# Cast NodeJs Utils

This is a collection of common elements that are more often than not needed in the construction of an express rest-api.

# Installation
Make use of npm to install the utility library
`npm install --save git+ssh://git@jnk-centos-git:tools/cast-nodejs-utils.git#master`

> Once versioning is availble replace `#master` with the desired version tag example : `#1.0.0`;

## Installation using Cast Artifactory:

Create an `.npmrc` registry file within your user data folder `C:/Users/{TRIGRAM}/` and add the following line:
```
registry=http://jnk-maven:8081/artifactory/api/npm/npm/
```

Or execute the following command in any shell:

```
npm config set registry http://jnk-maven:8081/artifactory/api/npm/npm/
```

After this it will then be possible to use the following to install the utility library:

```
npm install --save cnjs-utils
```

> Please not that this installation method is not yet available as the utilities are still undergoing continous updates before a first release.

# Usage

Utilities a split into different segments based on application requirements. There will be no global import.

```js
const { Server, ConfigurationFactory } = require("cnjs-utils/server");
```

## Dependencies

The library does not automatically install any dependencies except the strict minimum.

`cnjs-utils/server` will require the following dependencies:
- express

`cnjs-utils/log` will require the following dependencies:
- morgan `required when using accessLogFactory`
- winston `required when using loggerFactory`
- winston-daily-rotate-file `only required for daily rotate file transport`
- rotating-file-stream `required when using accessLogFactory`

`cnjs-utils/data/sql` will require the following dependencies:
- sequelize

# Server Utilities

## Server / Controller abstract control-flow methods
> `$preprocess` is an abstract method that will run asynchronously before the server is initialized, this event occurs before child-controller initilization. See `TestServer` implementation for an example.

> `$postprocess` is an abstract method that will run asynchronously after the server is initialized, this event occurs after the server / controller has started and is queryable. See `TestServer` implementation for an example.

## Server
Server is an abstract class that will automatically initialize all child controllers.

### Example

```js
const { Server } = require("cnjs-utils/server");
const { loggerFactory, consoleTransportFactory, logLevel } = require("cnjs-utils/log");
const ApiController = require("./controllers/api-controller");
const ServiceController = require("./controllers/service-controller");

const helmet = require("helmet");

class TestServer extends Server{
  constructor(){
    super({
      name: "testServer",
      port: 8080,
      https: false,
      logger: loggerFactory({}, consoleTransportFactory(logLevel.debug, true)), // this should be your application logger, unless you want one specific for the server.
      middleware: [
        helmet()
      ],
      bootMessage: ( name, port ) => `${name} started on port: ${port}`
    },
    ApiController, 
    ServiceController,
    // if it is required you can initialize the controller first : new ApiController(), this however will change intialization order
    );
  }

  async $preprocess(){
    await ServiceIndex.generate();
    await ServiceIndex.initCache();
    await ServiceIndex.syncDatabase();
  }

  async $postprocess(){
    await ServiceIndex.scheduleCacheRefreshInterval("1h");
    await ServiceIndex.closeAdminAccess();
  }
}

new TestServer();
```

## Controller
Controller is an abstract class that will automatically initialize all child controllers.

### Example

```js
const { Controller, middleware } = require("cnjs-utils/server");

const ChildController = require("./child-controller");
const ServiceIndex = require("../service/indexer");
const { maybe } = middleware;

class ApiController extends Controller{
  constructor(){
    super({
      autoBind: true, // execute bind on all api methods ( this is useful if you are using `this` inside your request handlers )
      baseUrl: "/api",
      caseSensitive: false, // set route case sensitivity
    },
    ChildController
    );

    this.internalIndex = 0;
  }

  async $preprocess(){
    // when not using decorators initiate routes here of in $postprocess
    const isActive = maybe( ( req, res, next ) => req.query.active === "true" );

    this
      .get("/main", this.mainHandler)
      .get("/sub", 
        isActive( this.handleInactive ), // this.handleInactive will only be used if the isActive condition is met
        this.subHandler);

    this.internalIndex = await ServiceIndex.getInternalIndex();
  }

  async $postprocess(){
    await ServiceIndex.reserveIndex( this.internalIndex );
  }

  handleInactive( req, res ){
    res.send("not active enough");
  }

  // GET::[/main] -> this is purely informative 
  async mainHandler( req, res ){
    res.send("main");
  }

  // GET::[/sub]
  async subHandler( req, res ){
    if( req.query.isActive ) res.send("sub");
    else res.send("not active enough");
  }
}

module.exports = ApiController;
```

## Controller with experimental decorators
A collection of routing decorators are available the application you are building will be transpiled or webpacked.

### Decorator requirements

The follow build tools dependencies will be required:
- @babel/core
- @babel/plugin-proposal-class-properties
- @babel/plugin-proposal-decorators
- @babel/preset-env
- babel-eslint ( recommended for syntax compatibility )

`.babelrc`
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true // this will prevent class constructors from being transformed
        }
      }
    ]
  ],
  "sourceMaps": "inline", // for debuging in vscode do not use for production builds
  "retainLines": true, // for debuging in vscode do not use for production builds
  "plugins": [
    ["@babel/plugin-transform-runtime"],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }]
  ]
}
```

### Example
```js
const { Controller, middleware, decorators } = require("cnjs-utils/server");
const { Get, Middleware } = require("cnjs-utils/decorators");
const { maybe } = middleware;

const isActive = maybe( req => req.query.active !== "1" )(( req, res, next ) => {
  res.send("inactive");
});

const logtime = (req, res, next) => {
  console.log(new Date().toISOString());
  next();
}

class HelperController extends Controller{
  constructor(){
    super("/api"); // baseurl can be passed alone, default options will be used.
  }


  @Get("main")
  @Middleware(logtime)
  @Middleware(isActive)
  async mainHandler( req, res ){
    res.send("main");
  }

  @Get("/sub")
  //    ^-- "/" is optional at the start of the route path definition
  @Middleware( isActive, logtime )
  async subHandler( req, res ){
    res.send("sub");
  }
}

module.exports = HelperController;
```

> It is important to note that when using decorators the middleware will be executed from top to bottom!

> While both `@Middleware` definition methods are supported, it is best to only use one style throughout the entire application. It is reccomended to use a single `@Middleware` decorator for all middleware, it makes controllers easier to read.

> IMPORTANT!!! Middleware cannot be a method of the controller class, `this` cannot be referenced inside a decorator! 
> `@Middleware(this.isActive)` will result in `this` being undefined and cause the controller to fail initialization!