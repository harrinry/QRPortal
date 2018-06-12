export default function MultiQuery( ...urls ){
  if (urls.length === 0) return;

  const pre = '/mlturl/';
  let qURLS = urls.map( u => 'u='+u ).join('&');
  return pre.concat('?', qURLS);
}