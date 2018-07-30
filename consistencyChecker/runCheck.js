const globSync = require('./lib/recursiveSyncGlob');
const matchTemplate = require('./lib/identifier');
const {getReporter, generateReports} = require('./lib/reporter');
const methods = require('./lib/validationMethods');

globSync('rest', ( path, fileName, contents ) => {
  const data = JSON.parse(contents);
  const template = matchTemplate(path);
  if( template ){
    const propsLength = template.itemProps ? template.itemProps.length : undefined;
    const R = getReporter(template.reportFile);
    if(template.type === 'array' ? !Array.isArray(data) : (typeof data !== template.type)) console.log(`path: ${path} | fileName: ${fileName} | error: TYPE ERROR`);
    else {
      switch (template.type) {
      case 'array': {
        const dl = data.length;
        for (let i = 0; i < dl; i++) {
          const item = data[i];
          for (let x = 0; x < propsLength; x++) {
            const { name, type, method } = template.itemProps[x];
            
            if ( !item.hasOwnProperty(name) ) {
              R.report( path, {index: i, type: 'missing property', msg: `the property ${name} is missing from the item` });
            } else {
              if ( type !== 'array' ? (typeof item[name] !== type) : Array.isArray(item[name]) ) {
                R.report( path, {index: i, type: 'property type missmatch', msg: `the property ${name} does not match defined type` });
              }

              if (method) {
                const _method = methods[method];
                const valid = _method( item[name] );

                if (!valid) {
                  R.report( path, {index: i, type: 'data validation', msg: `the property value of ${name} failed the validation check: ${method}` });
                }
              }
            }
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