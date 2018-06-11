const express = require('express');
const { route } = require('./constants');
const options = require('./options');
const errHandler = require('../middleware/errorHandler');

let imageRouter = express.Router();

imageRouter.get(route, (req, res)=>{
  res.sendFile(req.params.imageName, options, (err)=>errHandler(err, res));
});

module.exports = imageRouter;