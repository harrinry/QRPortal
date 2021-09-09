// const sequelize = require("sequelize");

/**
 * @param {import("./config").DataAccessConfiguration} config 
 * @param  {...any} entityFactories 
 * @returns {import("sequelize/types").Sequelize}
 */
function createRepository( sequelize, config, ...entityFactories ){
  const database = config.isSQLite()
    ? createSQLiteDatabase( sequelize, config )
    : createSQLDatabase( sequelize, config );

  initEntities( database, ...entityFactories );
  associateEntities( database );
  // dataInitiation(database);
  
  return database;
}

/**
 * @param {import("sequelize/types").Sequelize} sequelize 
 * @param {import("./config").DataAccessConfiguration} config 
 * @returns {import("sequelize/types").Sequelize}
 */
function createSQLiteDatabase( sequelize, config ){
  return new sequelize({
    storage: config.storage,
    dialect: config.dialect,
    logging: false,
    define: {
      timestamps: false,
    }
  });
}

/**
 * @param {import("sequelize/types").Sequelize} sequelize 
 * @param {import("./config").DataAccessConfiguration} config 
 * @returns {import("sequelize/types").Sequelize}
 */
function createSQLDatabase( sequelize, config ){
  return new sequelize(
    config.name,
    config.user,
    config.password,
    {
      dialect: config.dialect,
      host: config.host,
      port: config.port,
      ssl: config.ssl,
      define: {
        timestamps: false,
      },
      logging: false
    });
}

/**
 * @param {import("sequelize/types").Sequelize} database 
 * @param  {...any} entityFactories 
 */
function initEntities(database, ...entityFactories ){
  for (const entityFactory of entityFactories) {
    entityFactory( database );
  }
}

/**
 * @param {import("sequelize/types").Sequelize} database 
 */
function associateEntities( database ){
  const entities = database.models;
  for (const entity of Object.keys(entities)) {
    if( !entities[entity].associate ) continue;
    entities[entity].associate(database);
  }
}

/**
 * @param {import("sequelize/types").Sequelize} database 
 */
async function dataInitiation( database ){
  const entities = database.models;
  for (const entity of Object.keys(entities)) {
    if( !entities[entity].dataSync ) continue;
    await entities[entity].dataSync();
  }
}

module.exports = {
  createRepository,
  dataInitiation,
}