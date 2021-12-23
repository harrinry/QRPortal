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
  ruleDetailsContainer: {
    padding: '24px 24px 0 24px',
    maxHeight: 'calc(100vh - 178px) !important',
    overflow: 'hidden auto',
  },
  ruleDetailsContent: {
    paddingTop: 24,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginBottom5: {    
    marginBottom: 5,
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
    <div>
      <Typography gutterBottom variant='h6' component='h2'>
        {title}
      </Typography>
      <Typography variant='body2' color='textSecondary'>
        {description}
      </Typography>
    </div>
  );

  const renderChipsInfo = (title, content) => (
    <div className={classes.marginBottom5}>
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

  return (
    !_isEmpty(ruleDetails)
      ? (<div className={classes.ruleDetailsContainer}>
        <Typography gutterBottom variant='h5' component='h2'>
          {_get(ruleDetails, 'name')}
        </Typography>
        <div className={classes.ruleDetailsContent}>
          <div className={classes.marginBottom20}>
            {isDataValid(_get(ruleDetails, 'businessCriteria')) && renderChipsInfo('Business Criteria', _get(ruleDetails, 'businessCriteria'))}
            {isDataValid(_get(ruleDetails, 'qualityStandards')) && renderChipsInfo('Quality Standards', _get(ruleDetails, 'qualityStandards'))}
            {isDataValid(_get(ruleDetails, 'technologies')) && renderChipsInfo('Technologies', _get(ruleDetails, 'technologies'))}
            {isDataValid(_get(ruleDetails, 'technicalCriteria')) && renderChipsInfo('Technical Criteria', _get(ruleDetails, 'technicalCriteria'))}
          </div>
          <div>
            {_get(ruleDetails, 'rationale') && renderItemInfo('Rationale', _get(ruleDetails, 'rationale'))}
            {_get(ruleDetails, 'remediation') && renderItemInfo('Remediation', _get(ruleDetails, 'remediation'))}
          </div>
        </div>
      </div>)
      : <div className={classes.empty}>No results found</div>
  );
};

export default RuleDetailsContent;
