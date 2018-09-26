const globSync = require('./lib/recursiveSyncGlob');
const matchTemplate = require('./lib/identifier');
const {getReporter, generateReports} = require('./lib/reporter');
const methods = require('./lib/validationMethods');
const logger = require('./lib/chkerLogger');

globSync('rest', ( path, fileName, contents ) => {
  let data;
  try {
    data = JSON.parse(contents);
  } catch (error) {
    logger.error('Error while parsing JSON of : ' + path + ' -- error : ' + error);
  }
  const template = matchTemplate(path);
  if( template ){
    const propsLength = template.itemProps ? template.itemProps.length : undefined;
    const R = getReporter(template.reportFile);
    if(template.type === 'array' ? !Array.isArray(data) : (typeof data !== template.type)) console.log(`path: ${path} | fileName: ${fileName} | error: TYPE ERROR`);
    else {
      switch (template.type) {
      case 'array': {
        const dl = data.length;
        let ddArr = [];
        for (let i = 0; i < dl; i++) {
          const item = data[i];
          for (let x = 0; x < propsLength; x++) {
            const { name, type, method } = template.itemProps[x];
            
            if ( !item.hasOwnProperty(name) ) {
              R.report( path, {index: i, type: 'missing property', msg: `the property ${name} is missing from the item` });
            } else {
              if ( type !== 'array' ? ( Array.isArray(type) ? type.indexOf(typeof item[name]) === -1 : typeof item[name] !== type) : Array.isArray(item[name]) ) {
                R.report( path, {index: i, type: 'property type missmatch', msg: `the property ${name} does not match defined type - was expecting: ${type} - found: ${typeof item[name]}`,
                  element : item });
              }

              if (method) {
                const _method = methods[method];
                const valid = _method( item[name] );

                if (!valid) {
                  R.report( path, {index: i, type: 'data validation', msg: `the property value of ${name} failed the validation check: ${method}`, element: item[name] });
                }
              }
            }
          }
          const jitm = JSON.stringify(item);
          if( ddArr.indexOf(jitm) > -1 ){
            R.report( path, {index: i, type: 'Duplicate', msg: 'Duplicate item found in data set', element: item });
          } else {
            ddArr.push(jitm);
          }
        }
        break;
      }
      case 'object': {
        for (let x = 0; x < propsLength; x++) {
          const { name, type, method } = template.props[x];
          console.log('testing');
          if (!data.hasOwnProperty(name) || data[name] === null ) {
            R.report( path, {index: null, type: 'missing property', msg: `the property ${name} is missing from object` });
          } else {
            if ( type !== 'array' ? (typeof data[name] !== type) : Array.isArray(data[name]) ) {
              R.report( path, {index: null, type: 'property type missmatch', msg: `the property ${name} does not match defined type` });
            }

            if (method) {
              const _method = methods[method];
              const valid = _method( data[name] );

              if (!valid) {
                R.report( path, {index: null, type: 'data validation', msg: `the property value of ${name} failed the validation check: ${method}` });
              }
            }
          }
        }
      }
      }
    }
  }
});

generateReports();