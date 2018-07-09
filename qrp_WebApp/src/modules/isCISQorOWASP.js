export default function isNonStandardList( url ){
  const reg = /\/OWASP\/categories\/|\/CISQ\/categories\/|\/CWE\/categories\//i;
  return reg.test(url) ? false : true;
}