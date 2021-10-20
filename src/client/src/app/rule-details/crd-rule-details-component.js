import React from 'react';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  empty: {
    textAlign: 'center',
    margin: '50px',
    letterSpacing: '5px',
    fontSize: '30px',
    color: 'silver',
  },
  chipRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const RuleDetailsContent = (props) => {
  const { ruleDetails } = props;
  const classes = useStyles();

  const isDataValid = data => data && !_isEmpty(data);

  const renderItemInfo = (title, description) => (
    <div style={{ 'marginBottom': '20px' }}>
      <Typography gutterBottom variant='h6' component='h2'>
        {title}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p' style={{ letterSpacing: '0.5px' }}>
        {description}
      </Typography>
    </div>
  );

  const renderChipsInfo = (title, content) => (
    <div style={{ 'marginBottom': '5px' }}>
      <Typography gutterBottom variant='button' component='h2'>
        {title}
      </Typography>
      <div className={classes.chipRoot}>
        {
          content.map(item => (
            <span key={item.id}>
              <Chip size='small' label={<Typography variant='caption'>{item.name}</Typography>} />
            </span>
          ))
        }
      </div>
    </div>
  );

  const renderChipDetails = () => (
    <div style={{ 'marginBottom': '20px' }}>
      {isDataValid(_get(ruleDetails, 'businessCriteria')) && renderChipsInfo('Business Criteria', _get(ruleDetails, 'businessCriteria'))}
      {isDataValid(_get(ruleDetails, 'qualityStandards')) && renderChipsInfo('Quality Standards', _get(ruleDetails, 'qualityStandards'))}
      {isDataValid(_get(ruleDetails, 'technologies')) && renderChipsInfo('Technologies', _get(ruleDetails, 'technologies'))}
      {isDataValid(_get(ruleDetails, 'technicalCriteria')) && renderChipsInfo('Technical Criteria', _get(ruleDetails, 'technicalCriteria'))}
    </div>
  );

  const renderRuleDetails = () => (
    <div>
      {_get(ruleDetails, 'rationale') && renderItemInfo('Rationale', _get(ruleDetails, 'rationale'))}
      {_get(ruleDetails, 'remediation') && renderItemInfo('Remediation', _get(ruleDetails, 'remediation'))}
    </div>
  );

  return (
    !_isEmpty(ruleDetails)
      ? <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {_get(ruleDetails, 'name')}
        </Typography>
        <CardContent>
          {renderChipDetails()}
          {renderRuleDetails()}
        </CardContent>
      </CardContent>
      : <div className={classes.empty}>No results found</div>
  );
};

export default RuleDetailsContent;
