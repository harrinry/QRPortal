function isv1URL ( url ){
  const reg = /rlDH|rlH|rlH2/ig;
  return reg.test(url);
}

function splitOnUnderScore( str ){
  return str.split('_');
}

const hydrateObj = {
  // example query : ?REF=_501&SEC=T_-3 || ?SEC=STD_CISQ_CISQPERFORMANCE&REF=ASCPEM-PRF-2_7198
  compare: {
    isVisible: false /*=> default*/ || true,
    params: []
  },
  rules: {
    qs: null || {
      href: 'path to list',
      id: 'id of selected standard'
    },
    rule: 'id of selected rule'
  },
  path: [
    {name: 'display name', icon: 'path to icon', href: 'path to rules list'}
  ],
  
};

module.exports = {};