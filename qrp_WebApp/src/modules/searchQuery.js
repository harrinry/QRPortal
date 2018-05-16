import Axios from 'axios';

export default function Search( queryString, indexDef ){
  return Axios.get( 'search?s='.concat(queryString, '&f=', indexDef ) )
    .catch( err => console.log(err.stack));
}