export default function MultiQuery( filter, ...urls ){
  if (urls.length === 0) return;

  const pre = '/mlturl/';
  let qURLS = urls.map( u => 'u='+u ).join('&');
  if ( filter ) qURLS += '&f=' + filter;
  return pre.concat('?', qURLS);
}