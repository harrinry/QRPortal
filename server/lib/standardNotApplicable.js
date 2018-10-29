const fs = require('fs');
const root = require('app-root-path');
const path = require('path');
const Struct = require('./dataConstruct/struct');

const Item = new Struct('id', 'name', 'href', 'count', 'applicable');

function getData(filepath, errhandler){
  if (fs.existsSync(root.resolve(filepath))) {
    return fs.readFileSync(filepath, {encoding: 'utf8'});
  }
}

function parseJSON(data, errhandler, res){
  let ret;
  try{
    ret = JSON.parse(data);
  } catch(err){
    errhandler()
  }

  return ret;
}

function isApplicable( list ){
  const validationData = fs.readFileSync(path.resolve(__dirname,'validationData', 'standards-validation.json'));
  const v_data = JSON.parse(validationData);
  return list.map( e => {
    const idFound = v_data.find(a => a.id === e.id);

    return new Item(e.id, e.name, e.href, e.count, idFound ? idFound.status : true);
  });
}

function middleWare( req, res, errorHandler ){
  if (fs.existsSync(root.resolve(filepath))) {
    return fs.readFileSync(filepath, {encoding: 'utf8'});
  }
}