(function(){

  'use strict';
  
  const hydrateObj = {
    // conversion from old url standards to new urls completed
    // example query : ?SEC=STD_CISQ_CISQPERFORMANCE&REF=ASCPEM-PRF-2|7198| || ?sec=srs_cpp&ref=|7168|2.0.0
    rules: {
      qs:['full list of elements with the potentially selected selement of the list having property selected = true'],
      rule: ['full list of elements with the potentially selected selement of the list having property selected = true']
    },
    path: [ // this part is done!!!
      {name: 'display name', icon: 'path to icon', href: 'path to rules list'}
    ],
    cmp: 'version id',
    search: 'search query string'
  };
  
  console.log('Hello world');
}());
