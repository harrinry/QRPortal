const express = require('express');
const { main } = require('../routes/routes');
const options = require('./options');
const errHandler = require('../middleware/errorHandler');

let marketingRouter = express.Router();

marketingRouter.get('/cta-styles.css', (req, res) =>{
  res.sendFile('cta-styles.css', options, (err) => errHandler(err, res));
});

marketingRouter.get(main+':nuggetList', (req, res) => {
  const file = req.params.nuggetList;
  res.sendFile(file + '.json', options, (err) => errHandler(err, res));
});

module.exports = marketingRouter;