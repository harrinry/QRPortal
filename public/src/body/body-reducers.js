import { NAVIGATION_VIEW } from './body-constants';

const initialState = {
  view: NAVIGATION_VIEW,
  navContent: [],
  numberOfArrays: 0,
  arrayContent:[]
};

const contentBodyReducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default contentBodyReducer;