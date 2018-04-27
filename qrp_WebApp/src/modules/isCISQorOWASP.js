export default function isNonStandardList( url ){
  const reg = /\/OWASP\/|\/CISQ\/|\/CWE\//i;
  return reg.test(url) ? false : true;
}