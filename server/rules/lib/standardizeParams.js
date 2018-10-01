const techMap = require('../../lib/technologies-map');
const categoryMap = require('../../lib/std-cat-map');

function standardize( queryParams ){
  if(!queryParams) return;
  const keys = Object.keys(queryParams),
    shouldTransform = keys.indexOf('rlH') > -1 || keys.indexOf('rlDH') > -1;

  return shouldTransform ? convertedQuery(queryParams) : queryParams;
}

function convertedQuery( params ){
  const { rlDH, rlH, rlH2 } = params;
  const isQStd = /(quality-standards)|(business-criteria)/ig.test(rlH),
    isTech = /(\/technologies\/)/ig.test(rlH),
    isExt = /(\/extensions\/)/ig.test(rlH),
    refRD = rlDH ? rlDH.substring(rlDH.indexOf('/quality-rules/') + 15) : '',
    stdID = rlH2 ? rlH2.substring(rlH2.indexOf('/items/') + 7, rlH2.indexOf('/quality-rules')) : '',
    is = isTech ? 't' : 
      (isExt ? 'srs' : (
        isQStd ? 'std' : undefined));
  
  let _cat, _ver='';
  
  switch (is) {
  case 't':{
    const rlh = rlH.replace(/\s/ig,'+');
    const tech = techMap.find( e => e.href === rlh);
    _cat = tech? tech.id : '';
    break;
  }
  case 'srs':{
    _cat = rlH.substring(rlH.indexOf('com.castsoftware.') + 17, rlH.indexOf('/versions/'));
    _ver = rlH.substring(rlH.indexOf('/versions/') + 10, rlH.indexOf('/quality-rules'));
    break;
  }
  case 'std':{
    const isQS = /(quality-standards)/ig.test(rlH);
    const trimmed = isQS ? rlH.substring(0, rlH.indexOf('/items')) : rlH.substring(0, rlH.indexOf('/quality-rules'));
    const category = categoryMap.find( e => e.href === trimmed );
    const type = isQS ? rlH.substring(rlH.indexOf('/quality-standards/') + 19, rlH.indexOf('/categories/')) : 'cast';
    _cat = type + '_' + category.name;
    break;
  }
  default:
    break;
  }
  return {
    sec: is ? is + '_' + _cat : undefined,
    ref: stdID + '|' + refRD + '|' + _ver,
  };
}

module.exports = standardize;
