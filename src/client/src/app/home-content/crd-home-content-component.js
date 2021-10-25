import React, { useState, useEffect } from 'react';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import _isEqual from 'lodash/isEqual';

import RulesWrapper from '../display-widgets/rules-wrapper';

const useStyles = makeStyles(() => ({
  deprecatedOption: {
    paddingRight: '10px',
    marginBottom: '-10px',
  },
  deprecatedOptionLabel: {
    letterSpacing: '1.25px',
    fontWeight: 'bold',
  },
}));

const HomeContent = (props) => {
  const {
    // matchParams,
    rulesList = [],
    ruleDetails,
    getRulesList,
    getRuleDetails: dispatchGetRuleDetails,
    isLoggedIn,
    searchResult = {},
    resetSearch,
    searchTerm,
  } = props;

  const classes = useStyles();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  const history = useHistory();

  const { qualityRules: searchResultQualityRules = [] } = searchResult;

  const [rulesListInfo, setRulesListInfo] = useState(rulesList);
  const [ruleDetailsInfo, setRulesDetailsInfo] = useState(ruleDetails);

  const isDetailsPresentInUrl = () => url.includes('details');

  const getRulesListUrl = () => isDetailsPresentInUrl ? url.split('/details/')[0] : url;

  const getSelectedRuleId = () => pathname.includes('details') && pathname.split('details/')[1];

  const getRuleDetails = ruleId => dispatchGetRuleDetails(ruleId, isLoggedIn);

  useEffect(() => {
    if (!_isEqual(rulesList, rulesListInfo)) {
      setRulesListInfo(rulesList);
    }
  }, [rulesList]);
  
  useEffect(() => {
    if (searchResultQualityRules.length > 0) {
      setRulesDetailsInfo([]);
      setRulesListInfo(searchResultQualityRules);
    }
  }, [searchResultQualityRules]);

  useEffect(() => {
    setRulesDetailsInfo(ruleDetails);
  }, [ruleDetails]);

  useEffect(() => {
    url && getRulesList(getRulesListUrl(url));
    if (searchResultQualityRules.length === 0) {
      setRulesDetailsInfo([]);
    }
    getSelectedRuleId() && getRuleDetails(getSelectedRuleId());
  }, [url]);

  useEffect(() => {
    if (!searchTerm) {
      setRulesListInfo([]);
      setRulesDetailsInfo([]);
    }
  }, [searchTerm]);

  return (
    <RulesWrapper
      rulesListInfo={rulesListInfo}
      getRuleDetails={getRuleDetails}
      ruleDetailsInfo={ruleDetailsInfo}
      selectedRuleId={getSelectedRuleId()}
    />
  );
};

HomeContent.propTypes = {
  isLoggedIn: PropTypes.bool,
  getRulesList: PropTypes.func,
  getRuleDetails: PropTypes.func,
  resetSearch: PropTypes.func,
  searchResult: PropTypes.object,
};

export default HomeContent;
