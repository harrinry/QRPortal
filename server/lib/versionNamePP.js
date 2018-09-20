const map = {
  LTS: '',
  FUNCREL: 'Func.Release',
  BETA: 'Beta',
  ALPHA: 'Alpha',
  AIP: 'AIP'
};

function cleanVersionName( name ){
  const type = getVersionType(name);
  const strFormat = '{0} {1} {2}';
  const strFormat2 = '{0} {1}';
  let versionArray = name.split('-');
  switch (type) {
  case map.FUNCREL:
    return formatString(strFormat2, versionArray[0], map.FUNCREL);
  case map.BETA:
    return formatString(strFormat, versionArray[0], map.BETA, versionArray[1].replace('beta', '') );
  case map.ALPHA:
    return formatString(strFormat, versionArray[0], map.ALPHA, versionArray[1].replace('alpha', '') );
  case map.AIP:
    return cleanAIPVersion(name);
  default:
    return name;
  }
}

function cleanAIPVersion( version ){
  return version.substring(0, version.search(/_/g) );
}

function formatString( str, ...args ){
  const r = /{(\d+)}/g;
  return str.replace( r, ( match, number ) => {
    return args[number] !== undefined
      ? args[number]
      : match;
  });
}

function getVersionType( name ){
  if (isFuncrel(name)) return map.FUNCREL;
  else if ( isBeta(name)) return map.BETA;
  else if ( isAlpha(name)) return map.ALPHA;
  else if ( isAIP(name)) return map.AIP;
  else return map.LTS;
}

function isAIP( name ){
  const reg = /_/i;
  return reg.test(name);
}

function isFuncrel( name ){
  const reg = /(funcrel)/i;
  return reg.test(name);
}

function isBeta( name ){
  const reg = /(beta)/i;
  return reg.test(name);
}

function isAlpha( name ){
  const reg = /(alpha)/i;
  return reg.test(name);
}

module.exports = cleanVersionName;