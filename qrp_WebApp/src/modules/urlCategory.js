import { TECHNOLOGY, BUSINESSCRITERIA, QUALITYSTANDARD, EXTENTION, CASTAIP } from './urlTypes';
import { EXTENTIONNAMES } from '../components/elements/sources/extentionNames';
import prettyPrintVersion from '../components/elements/sources/versionNamePP';
import Axios from 'axios';
const technos = 'technologies.json?env=webapp';
const businessCriteriaList = 'business-criteria.json';

export default function deriveNameFromURL( url, callback, errorHandler ){
  if ( !url ) return;
  const urlType = getUrlType( url );
  switch (urlType) {
  case TECHNOLOGY:
    return requestAndFilter( technos, url, callback, errorHandler );
  case EXTENTION:
    return callback( getNameFromExtentionUrl( url ));
  case BUSINESSCRITERIA:
    return requestAndFilter( businessCriteriaList, url, callback, errorHandler );
  case QUALITYSTANDARD:
    return callback( getNameFromUrl( url ));
  case CASTAIP:
    return callback( getCastAIPNameFromURL( url ));
  default:
    return errorHandler('URL does not match any types');
  }
}

function getCastAIPNameFromURL( url ){
  const prefix = 'CAST AIP ';
  const fullversion = getNameFromUrl( url );
  const fullName = prefix + fullversion;
  return fullName.substring(0, fullName.indexOf('_') );
}

function getNameFromUrl ( url ){
  const name = url.match( /[^/]+(?=\.json)/i );
  return name;
}

function getNameFromExtentionUrl ( url ){
  const name = url.substring( 28, url.indexOf( '/', 28) );
  const version = url.substring( url.indexOf( '/', 28) + 1, url.indexOf('.json', 28) );
  return EXTENTIONNAMES[ name ] + ' ' + prettyPrintVersion(version);
}

function requestAndFilter( query, url, callback, errorHandler ) {
  return Axios.get( query )
    .then( res => {
      const data = res.data;
      const element = data.find( entry => entry.href === url );
      if ( callback ) callback( element.name );
    })
    .catch( err => errorHandler ? errorHandler( err ) : console.log( err ));
}

function getUrlType( url ){
  if( isBusinessCriteria( url ) ) return BUSINESSCRITERIA;
  else if ( isTechnology( url ) ) return TECHNOLOGY;
  else if ( isExtention( url ) ) return EXTENTION;
  else if( isQualityStandard( url ) ) return QUALITYSTANDARD;
  else if( isCASTAIP( url )) return CASTAIP;
}

function isTechnology( url ){
  const reg = /(technologies\/)/i;
  return reg.test( url );
}

function isExtention( url ){
  const reg = /(extensions\/)/i;
  return reg.test( url );
}

function isCASTAIP( url ){
  const reg = /(CAST_AIP\/)/i;
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