import axios from 'axios';

export const setAxiosAuthHeader = (jwt) => {
  axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
};

export const unsetAxiosAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
