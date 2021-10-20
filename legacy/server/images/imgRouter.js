const express = require('express');
const fs = require('fs');
const path = require('path');
const { imagesRoute } = require('../routes/routes');
const options = require('./options');
const errHandler = require('../middleware/errorHandler');
let fileList = [];

let imageRouter = express.Router({caseSensitive: false});

function populateImageList(){
  const imageList = fs.readdirSync(path.resolve(__dirname, 'img'));
  fileList = imageList;
}

function getImageNormalizedName(name = ''){
  if(fileList.length === 0) populateImageList();
  return fileList.find(_ => _.toLowerCase() === name.toLowerCase());
}

imageRouter.get(imagesRoute, (req, res) => {
  const normalizedImageName = getImageNormalizedName(req.params.imageName);

  res.sendFile(normalizedImageName || req.params.imageName, options, (err)=>errHandler(err, res));
});

module.exports = imageRouter;