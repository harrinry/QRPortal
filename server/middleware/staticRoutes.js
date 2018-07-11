const express = require('express');
const { staticRoutes } = require('./constants');

function initiateStaticRoutes( expressApp ){

  for (let i = 0; i < staticRoutes.length; i++) {
    const route = staticRoutes[i];
    expressApp.use( express.static( route.name ) );
    expressApp.get( route.url, ( req, res ) => {
      res.sendFile( route.PATH );
    });
  }
}

module.exports = initiateStaticRoutes;