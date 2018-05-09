import Axios from 'axios';

export default function Search( queryString ){
  return Axios.get( 'search?s='.concat(queryString) )
    .catch( err => console.log(err.stack));
}