import Axios from 'axios';

export function createClassName( ...classes ){
  return classes.filter( cls => cls !== undefined && cls !== null).join(' ');
}

export function restQuery( url, callback, errHandler ){
  const prefix = '/rest?q=';

  if (!errHandler) errHandler = ( err ) => console.log(err);

  Axios.get( prefix + url )
    .then( res => callback(res) )
    .catch(err => errHandler(err) );
}