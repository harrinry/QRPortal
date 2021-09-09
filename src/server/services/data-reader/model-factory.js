
/**
 * @param {string} id 
 * @param {string} baseUrl 
 * @param {import("./models/interface").DataReaderModel} model 
 */
function modelFactory(id, baseUrl, model){
  const Model = model;
  const _id = id;
  const _baseUrl = baseUrl;

  return (data) => new Model(_id, _baseUrl, data);
}

module.exports = modelFactory;