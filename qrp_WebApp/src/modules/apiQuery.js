import Axios from 'axios';
const rest = 'rest?q=';

export function APIQuery( dataName, callback, onError ){
  Axios.get( rest + dataName )
    .then( (res) => callback( res ) )
    .catch( ( err ) => {if (onError) onError( err );
    else console.log(err.stack);
    });
}