import Axios from 'axios';

export function APIQuery( dataName, callback ){
  Axios.get( dataName +'.json' )
    .then( (res) => callback( res ) )
    .catch( ( err)=> console.log(err.stack));
}