import { SET_MARKETING_RESOURCE_POINTER } from './mkt-actions-type';

export const setResourcePointer = ( technoName ) => {
  return {
    type: SET_MARKETING_RESOURCE_POINTER,
    payload: technoName
  };
};