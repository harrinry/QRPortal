const express = require('express');
const { staticRoutes } = require('./constants');

function initiateStaticRoutes( expressApp ){

  for (let i = 0; i < staticRoutes.length; i++) {
    const route = staticRoutes[i];
    if( route.use ){
      expressApp.use( route.url, express.static( route.PATH ) );
    } else {
      expressApp.use( express.static( route.name ) );
      expressApp.get( route.url, ( req, res ) => {
        res.sendFile( route.PATH );
      });
    }
    console.log('Static Route : ' + route.name + ' initialized on route: ' + route.url);
  }
}

module.exports = initiateStaticRoutes;