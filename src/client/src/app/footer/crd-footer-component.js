import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import constants from './crd-footer-constants';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    zIndex: 1300,
    backgroundColor: '#1f2444',
    color: 'white',
    height: '54px',
  },
  grow: {
    flexGrow: 1,
  },
  footerLogo: {
    background: 'url(/assets/img/castWithTaglineWhite.svg) no-repeat center',
    width: '300px',
    height: '30px',
    cursor: 'pointer',
  },
  footerOptions: {
    color: '#789',
    fontSize: '11px',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const labels = {
    contact: 'Contact Us',
    privacy: 'Privacy Policy',
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow}>
            <Grid container={true} direction='row' justifyContent='flex-end' alignItems='center'>
              <Grid item={true} xs={1}>
                <Typography variant='button' display='block' gutterBottom>
                  <Link target='_blank' href={constants.CONTACT_US} className={classes.footerOptions}>{labels.contact}</Link>
                </Typography>
              </Grid>
              <Grid item={true} xs={1}>
                <Typography variant='button' display='block' gutterBottom>
                  <Link target='_blank' href={constants.PRIVACY_POLICY} className={classes.footerOptions}>{labels.privacy}</Link>
                </Typography>
              </Grid>
              <Grid item={true} xs={8} style={{ textAlign: 'center', letterSpacing: '0.5px' }} className={classes.footerOptions}>
                <Typography variant='overline' display='block' gutterBottom style={{ letterSpacing: '1px', textTransform: 'capitalize' }}>{constants.COPY_RIGHT}</Typography>
              </Grid>
              <Grid item={true} xs={2}>
                <Link target='_blank' href={constants.CAST_SOFTWARE}>
                  <div className={classes.footerLogo} />
                </Link>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;
