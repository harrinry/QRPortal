export default function MultiQuery( ...urls ){
  if (urls.length === 0) return;

  const cleanUrls = urls.map( u => u.replace(/\/mlturl\/\?u=/gi, '') );

  const pre = '/mlturl/',
    qURLS = cleanUrls.map( u => 'u='+u ).join('&');
  return pre.concat('?', qURLS);
}