const express = require('express');
const { imagesRoute } = require('../routes/routes');
const options = require('./options');
const errHandler = require('../middleware/errorHandler');

let imageRouter = express.Router();

imageRouter.get(imagesRoute, (req, res)=>{
  res.sendFile(req.params.imageName, options, (err)=>errHandler(err, res));
});

module.exports = imageRouter;