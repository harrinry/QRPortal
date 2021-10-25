import appActionsType from './crd-app-actions-type';
import _startsWith from 'lodash/startsWith';
import _get from 'lodash/get';

const defaultState = {
  isPending: false,
  isMenuLoading: false,
  mainMenu: [],
  subMenu: [],
  treeItem: [],
  treeViewData: [],
  qualityRulesList: [],
  ruleDetails: [],
};

const isAppAction = ({ type }) => _startsWith(type, 'app/');

export default function appReducers(state = defaultState, action) {
  if (isAppAction(action)) {
    switch (action.type) {
      case appActionsType.GET_MAIN_MENU_REQUEST:
      case appActionsType.GET_RULE_DETAILS_REQUEST:
      case appActionsType.GET_RULES_LIST_REQUEST: {
        return {
          ...state,
          isPending: true,
        };
      }
      case appActionsType.GET_MAIN_MENU_SUCCESS: {
        const { mainMenu } = action.payload;

        return {
          ...state,
          mainMenu,
          treeItem: _get(mainMenu, 'items'),
          isPending: false,
        };
      }
      case appActionsType.GET_MAIN_MENU_FAILURE:
      case appActionsType.GET_RULE_DETAILS_FAILURE:
      case appActionsType.GET_RULES_LIST_FAILURE: {
        return {
          ...state,
          isPending: false,
        };
      }
      case appActionsType.GET_SUB_MENU_REQUEST: {
        return {
          ...state,
          isMenuLoading: true,
        };
      }
      case appActionsType.GET_SUB_MENU_SUCCESS: {
        let newTree = state.treeItem;
        const { subMenu, url, updateIndex } = action.payload;
        const subItems = _get(subMenu, 'items');
        const isQualityRulesPresent = Array.isArray(subMenu.qualityRules);
        const qualityRulesList = isQualityRulesPresent ? subMenu.qualityRules : [];

        if (subItems && !isQualityRulesPresent) {
          newTree[updateIndex] = {
            ...newTree[updateIndex],
            [url]: subItems,
          };
        }

        return {
          ...state,
          subMenu: subItems,
          treeItem: newTree,
          isMenuLoading: false,
        };
      }
      case appActionsType.GET_SUB_MENU_FAILURE: {
        return {
          ...state,
          isMenuLoading: false,
        };
      }
      case appActionsType.GET_RULES_LIST_SUCCESS: {
        const { rulesList } = action.payload;

        return {
          ...state,
          qualityRulesList: _get(rulesList, 'qualityRules', []),
          isPending: false,
        };
      }
      case appActionsType.GET_RULE_DETAILS_SUCCESS: {
        const { ruleDetails } = action.payload;

        return {
          ...state,
          ruleDetails,
          isPending: false,
        };
      }
      case appActionsType.SET_AUTHENTICATION: {
        const { isLoggedIn } = action.payload;

        return {
          ...state,
          isLoggedIn,
        };
      }
      case appActionsType.LOGIN: {
        return {
          ...state,
          isAuthRequestOngoing: true,
        };
      }
      case appActionsType.LOGIN_SUCCESS: {
        return {
          ...state,
          loginErrorMessage: '',
          isAuthRequestOngoing: false,
        };
      }
      case appActionsType.LOGIN_FAILURE: {
        const { loginErrorMessage } = action.payload;

        return {
          ...state,
          loginErrorMessage,
          isAuthRequestOngoing: false,
        };
      }
      case appActionsType.RESET_LOGIN_ERROR_MESSAGE: {
        return {
          ...state,
          loginErrorMessage: '',
        };
      }
      case appActionsType.LOGOUT: {
        return {
          ...state,
          isLoggedIn: false,
        };
      }
      case appActionsType.SEARCH_QUERY: {
        const { searchCriterion, searchTerm } = action.payload;

        return {
          ...state,
          searchCriterion,
          searchTerm,
        };
      }
      case appActionsType.SEARCH_SUCCESS: {
        const { searchResult } = action.payload;
        
        return {
          ...state,
          searchResult,
        };
      }
      case appActionsType.RESET_SEARCH: {
        return {
          ...state,
          searchResult: {},
          searchCriterion: '',
          searchTerm: '',
        };
      }
      case appActionsType.RESET_RULE_DETAILS: {
        return {
          ...state,
          ruleDetails: {},
        };
      }
      default:
        return state;
    }
  }
  return state;
}
