

const initState = [ 
  {
    name: 'Standards',
    href: '/rest?q=quality-standards.json'
  }, 
  {
    name:'Technologies'
  },
  { 
    name:'Sources'
  }];

const navItemsReducer = (state = initState, action) => {
  switch (action.type) {
  
  default:
    return state;
  }
};

export default navItemsReducer;