const fs = require("fs");
const PropertyReader = require("../lib/property-reader");

/**
 * @typedef ConfigurationOptions
 * @property {string} path
 * @property {"json" | "properties" | "custom"} format
 * @property {boolean} newable
 * @property {(data: buffer) => Object} formater
 */

/**
 * 
 * @param {ConfigurationOptions} opts 
 */
function mergeDefaultOpts(opts){
  return {
    path: "",
    format: "json",
    newable: true,
    formater: () => { throw new Error("Custom formater not provided"); },
    ...opts,
  };
}

/**
 * @param {ConfigurationOptions} options 
 * @param {any} ConfigurationDTO 
 */
function ConfigurationFactory(options, ConfigurationDTO, ...params){
  options = mergeDefaultOpts(options);

  const data = parseConfig(
    readConfigurationFile(options.path),
    options.format,
    options.formater,
  );

  return ConfigurationDTO 
    ? (options.newable ? new ConfigurationDTO(data, ...params) : ConfigurationDTO(data, ...params))
    : data;
}

function readConfigurationFile(filePath){
  return fs.readFileSync(filePath);
}

function parseConfig(data, format, customFormater){
  switch (format) {
  case "json":
    return parseJSON(data);
  case "properties":
    return parseProperties(data);
  case "custom":
    return customFormater(data);
  default:
    return;
  }
}

function parseJSON(rawData){
  let data;
  
  try {
    data = JSON.parse(rawData.toString());
  } catch (err){
    throw err;
  }

  return data;
}

function parseProperties(rawData){
  const reader = new PropertyReader(rawData);

  return reader.getProperties();
}

module.exports = {
  ConfigurationFactory,
  // readConfigurationFile,
  // parse,
  // parseJSON,
};