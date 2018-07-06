const express = require('express');
const { staticRoutes } = require('./constants');

function initiateStaticRoutes( expressApp ){

  expressApp.use( express.static( staticRoutes.static.name ) );
  expressApp.get( staticRoutes.static.url, ( req, res ) => {
    res.sendFile( staticRoutes.static.PATH );
  });
}

module.exports = initiateStaticRoutes;