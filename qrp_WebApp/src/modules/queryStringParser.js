
export default function ParseQueryString( qryStr ){
  const cleanStr = qryStr.substring(1),
    params = cleanStr.split(/&/),
    parsedParams = params.map( p => p.split(/=/) );
  
  let o = {};
  parsedParams.forEach( ( dataSet ) => {
    o [ dataSet[0] ] = dataSet[1];
  });

  return o;
}