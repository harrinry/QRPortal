module.exports = function MultiQuery( ...urls ){
  if (urls.length === 0) return;

  return urls.join('+');
};