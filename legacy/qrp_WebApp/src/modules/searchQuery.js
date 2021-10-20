import Axios from 'axios';

export default function Search( queryString, indexDef ){
  return Axios.get( 'search/'.concat( indexDef, '/?q=', queryString ) )
    .catch( err => console.log(err.stack));
}