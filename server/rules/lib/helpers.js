function isv1URL ( url ){
  const reg = /rlDH|rlH|rlH2/ig;
  return reg.test(url);
}

function splitOnUnderScore( str ){
  return str.split('_');
}

const hydrateObj = {
  // conversion from old url standards to new urls completed
  // example query : ?SEC=STD_CISQ_CISQPERFORMANCE&REF=ASCPEM-PRF-2_7198 || ?sec=srs_cpp&cmp=1.0.2~1.0.3&ref=_7168&
  cmp: ['versionObject', 'versionObject'],
  rules: {
    qs: null || {
      href: 'path to list',
      id: 'id of selected standard'
    },
    rule: 'id of selected rule'
  },
  path: [ // this part is done!!!
    {name: 'display name', icon: 'path to icon', href: 'path to rules list'}
  ],
  search: 'search query string'
};