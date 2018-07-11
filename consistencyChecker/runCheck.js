const globSync = require('./lib/recursiveSyncGlob');
const matchTemplate = require('./lib/identifier');
const urlChecker = require('./lib/hrefTester');

globSync('rest', ( path, fileName, contents ) => {
  const data = JSON.parse(contents);
  const template = matchTemplate(path);
  if( template ){
    const propsLength = template.itemProps.length;
    
    if(template.type === 'array' ? !Array.isArray(data) : (typeof data !== template.type)) console.log(`path: ${path} | fileName: ${fileName} | error: TYPE ERROR`);
    else {
      switch (template.type) {
      case 'array':
        console.log(`fileName : ${path} | Matched template + type`);
        break;
      }
    }
  }
});