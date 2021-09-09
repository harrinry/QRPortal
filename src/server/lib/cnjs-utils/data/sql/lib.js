
/**
 * @param {import("sequelize").Sequelize} database 
 * @param {string} schema 
 */
function defineSchema( database, schema ){
  return database.getDialect() === "sqlite" ? undefined : schema;
}

/**
 * @param {import("./lib").EntityFactoryOptions} options 
 */
function defineModel( options ){

  return function ModelFactory( database ){
    const model = database.define(options.name, options.column, {...options.options, schema: defineSchema( database, options.options.schema )});

    if( options.associate ){
      model.associate = options.associate;
    }

    if( options.sync ){
      model.dataSync = () => options.sync( database )
    }

    if( options.proto ){
      const keys = Object.keys( options.proto );
      for (const protoKey of keys) {
        model.prototype[protoKey] = options.proto[protoKey];
      }
    }

    return database.models[ options.name ] = model;
  };

}

module.exports = {
  defineSchema,
  defineModel,
};