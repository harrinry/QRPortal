export default function determineUrlCategory( url ){
  const urlType = getUrlType( url );

  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }
}

function getUrlType( url ){
  if( isBusinessCriteria( url ) ) return 'businessCriteria';
  else if ( isTechnology( url ) ) return 'technology';
  else if ( isExtention( url ) ) return 'extention';
  else if( isQualityStandard( url ) ) return 'qualityStandard';
}

function isTechnology( url ){
  const reg = /(technologies\/)/i;
  return reg.test( url );
}

function isExtention( url ){
  const reg = /(extentions\/)/i;
  return reg.test( url );
}

function isBusinessCriteria( url ){
  const reg = /(business-criteria\/)/i;
  return reg.test( url );
}

function isQualityStandard( url ){
  const reg = /(quality-standards\/)/i;
  return reg.test( url );
}