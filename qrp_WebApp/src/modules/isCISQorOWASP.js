export default function isNonStandardList( url ){
  const reg = /\/OWASP\/|\/CISQ\//i;
  return reg.test(url) ? false : true;
}