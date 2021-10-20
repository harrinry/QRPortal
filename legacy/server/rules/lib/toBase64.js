module.exports = function toBase64( str ){
  const base = 'base64';
  return Buffer.from(str).toString(base);
};