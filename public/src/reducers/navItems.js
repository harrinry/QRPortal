

const initState = [ 
  {
    name: 'Standards',
    href: '/rest?q=quality-standards.json'
  }, 
  {
    name:'Technologies',
    href: '/rules/technologies.json'
  },
  { 
    name:'Sources',
    href: '/rules/extensions.json'
  }];

const navItemsReducer = (state = initState, action) => {
  switch (action.type) {
  
  default:
    return state;
  }
};

export default navItemsReducer;