import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
    color: 'silver',
  },
}));

const HomeDefault = () => {
  const classes = useStyles();

  return (
    <Grid container={true} justifyContent='center' >
      <Grid item={true} xs={6}>
        <div className={classes.empty}>No results found</div>
      </Grid>

      <Grid item={true} xs={6}>
        <div className={classes.empty}>No results found</div>
      </Grid>
    </Grid>
  );
};

export default HomeDefault;
