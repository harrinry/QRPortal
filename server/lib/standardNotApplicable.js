const fs = require('fs');
const root = require('app-root-path');
const path = require('path');
const Struct = require('./dataConstruct/struct');

const Item = new Struct('id', 'name', 'href', 'count', 'notapplicable');


function isApplicable( list ){
  const validationData = fs.readFileSync(path.resolve(__dirname,'validation', 'standards-validation.json'));
  const v_data = JSON.parse(validationData);
  return list.map( e => {
    const idFound = v_data.find( a => a === e.id );

    return new Item(e.id, e.name, e.href, e.count, idFound ? true : false);
  });
}

function handler( req, res, errorHandler ){
  const filepath = root.resolve('rest/AIP/' + req.url + '/items.json');
  if (fs.existsSync(filepath)) {
    let data;
    const file = fs.readFileSync(filepath, {encoding: 'utf8'});
    try{
      data = JSON.parse(file);
    } catch(err){
      return errorHandler(err, res);
    }
    return res.json( isApplicable( data ));
  } else {
    return errorHandler({statusCode: 404,
      error: 'file:' + req.url +'/items.json not found'}, res);
  }
}

module.exports = handler;