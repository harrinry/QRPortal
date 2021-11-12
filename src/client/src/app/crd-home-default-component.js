import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  title: {
    letterSpacing: '2px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#6495ED',
  },
  empty: {
    textAlign: 'center',
    margin: '50px',
    letterSpacing: '5px',
    fontSize: '30px',
  },
  rulesDocIcon: {
    height: '150px',
    width: '150px',
    margin: '0 auto',
    background: 'url(/assets/img/LogoStructuralRulesReflect.svg) no-repeat top center',
  },
  rulesDocTitle: {
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
}));

const HomeDefault = () => {
  const classes = useStyles();
  const labels = {
    castRulesDoc: 'CAST Rules Documentation',
    castRulesDocSubTitle: 'Welcome to CAST Rules documentation, start browsing or searching',
  };

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '60vh' }}
    >
      <Grid item>
        <div className={classes.rulesDocIcon} />
        <div className={classes.rulesDocTitle}>
          <Typography style={{ letterSpacing: '1px', textAlign: 'center' }} variant='h4'>{labels.castRulesDoc}</Typography>
        </div>
        <div>
          <Typography
            style={{ marginTop: '10px', letterSpacing: '3.25px', textAlign: 'center', color: '#605D63' }}
            variant='subtitle2'
          >
            {labels.castRulesDocSubTitle}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomeDefault;
