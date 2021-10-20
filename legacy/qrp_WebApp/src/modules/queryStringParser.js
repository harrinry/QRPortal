
export default function ParseQueryString( qryStr ){
  let o = {};
  const cleanStr = qryStr.substring(1),
    rx = /(?:\w{3,}|[$@()+.])+=/gi,
    params = cleanStr.match(rx),
    paramValues = cleanStr.split(rx);
  paramValues.splice(0,1);
  const end = params.length;
  for (let index = 0; index < end; index++) {
    o[params[ index ].replace(/=$/g,'') ] = paramValues[ index ].replace(/&$/g, '');
  }

  return o;
}