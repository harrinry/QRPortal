const express = require('express');
const options = require('./options');
const errHandler = require('../middleware/errorHandler');

let fontRouter = express.Router({caseSensitive: false});

fontRouter.get('/:fontFile', (req, res)=>{
  res.sendFile(req.params.fontFile, options, (err)=>errHandler(err, res));
});

module.exports = fontRouter;