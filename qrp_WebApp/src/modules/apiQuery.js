import Axios from 'axios';

export function APIQuery( dataName, callback, onError ){
  Axios.get( dataName )
    .then( (res) => callback( res ) )
    .catch( ( err ) => {if (onError) onError( err );
    else console.log(err.stack);
    });
}