import axios from 'axios';

export const setAxiosAuthHeader = (jwt) => {
  axios.defaults.headers.common.Authorization = `Bearer ${jwt.replace(/^"(.*)"$/, '$1')}`;
};

export const unsetAxiosAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
