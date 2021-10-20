import React, { useState, useEffect } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import RuleList from '../rule-list/crd-rule-list-component';
import RuleDetails from '../rule-details/crd-rule-details-component';

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
  const { matchParams, rulesList, ruleDetails, getRulesList, getRuleDetails } = props;
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();

  const [rulesListInfo, setRulesListInfo] = useState(rulesList);
  const [ruleDetailsInfo, setRulesDetailsInfo] = useState(ruleDetails);

  const isDetailsPresentInUrl = () => url.includes('details');

  const getRulesListUrl = () => isDetailsPresentInUrl ? url.split('/details/')[0] : url;

  const getSelectedRuleId = () => pathname.includes('details') && pathname.split('details/')[1];

  useEffect(() => {
    setRulesListInfo(rulesList);
  }, [rulesList]);

  useEffect(() => {
    setRulesDetailsInfo(ruleDetails);
  }, [ruleDetails]);

  useEffect(() => {
    url && getRulesList(getRulesListUrl(url));
    setRulesDetailsInfo([]);
    getSelectedRuleId() && getRuleDetails(getSelectedRuleId());
  }, [url]);

  return (
    <Grid container={true} justifyContent='center'>
      <Grid item={true} xs={6}>
        <RuleList qualityRulesList={rulesListInfo} selectedRuleId={getSelectedRuleId()} getRuleDetails={getRuleDetails} />
      </Grid>

      <Grid item={true} xs={6}>
        <Grid container />
        <RuleDetails ruleDetails={ruleDetailsInfo} />
      </Grid>
    </Grid>
  );
};

HomeContent.propTypes = {
  getRulesList: PropTypes.func,
  getRuleDetails: PropTypes.func,
};

export default HomeContent;
