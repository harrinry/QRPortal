import * as ACTIONTYPE from './cmp-actions-type';

export const isFetching = ( query ) => {
  return {
    type: ACTIONTYPE.CMP_FETCH_COMPARISON_DATA,
    payload: {
      query
    }
  };
};