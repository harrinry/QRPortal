import axios from 'axios';
import constants from './crd-app-constants';

const getMainMenu = serviceType => axios.get(`${constants.REST_API}/${serviceType}`).then(response => response.data);

const getSubMenu = url => axios.get(`${constants.REST_API}/${url}`).then(response => response.data);

const getRulesList = rulesListUrl => axios.get(`${constants.REST_API}${rulesListUrl}`).then(response => response.data);

const getRuleDetails = ruleId => axios.get(`${constants.REST_API}/quality-rules/${ruleId}`)
  .then(response => response);

const login = (username, password) => axios.post(`${constants.REST_API}/sso/authenticate`, { uid: username, pwd: password })
  .then(response => response.data);

const searchQuery = (searchCriterion, searchTerm) => axios.get(`${constants.REST_API}/quality-rules?q=${searchTerm}&${searchCriterion}`)
  .then(response => response.data);

export default {
  getMainMenu,
  getSubMenu,
  getRulesList,
  getRuleDetails,
  login,
  searchQuery,
};
