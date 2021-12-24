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
    height: 54,
    backgroundColor: '#1f2444',
    color: 'white',
  },
  toolBar: {
    minHeight: 54,
  },
  footerWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLinks: {
    display: 'flex',
  },
  footerLink: {
    marginRight: 16,
    display: 'flex',
  },
  footerText: {
    fontSize: 11,
    color: '#789',
    textAlign: 'center',
  },
  footerCopyright: {
    marginRight: 16,
    fontSize: 12,
    letterSpacing: 1,
    color: '#789',
    textTransform: 'capitalize',
  },
  footerOption: {
    display: 'flex',
    alignItems: 'center',
  },
  footerLogoWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  footerLogo: {
    background: 'url(/assets/img/castWithTaglineWhite.svg) no-repeat center',
    width: 160,
    height: 30,
    cursor: 'pointer',
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
        <Toolbar className={classes.toolBar}>
          <div className={classes.footerWrapper}>
            <div className={classes.footerLinks}>
              <Typography variant='button' className={classes.footerLink}>
                <Link target='_blank' href={constants.CONTACT_US} className={classes.footerText}>{labels.contact}</Link>
              </Typography>
              <Typography variant='button' className={classes.footerLink}>
                <Link target='_blank' href={constants.PRIVACY_POLICY} className={classes.footerText}>{labels.privacy}</Link>
              </Typography>
            </div>
            <Typography className={classes.footerCopyright}>{constants.COPY_RIGHT}</Typography>
            <Link target='_blank' href={constants.CAST_SOFTWARE}>
              <div className={classes.footerLogo} />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;
