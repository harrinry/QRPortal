const express = require('express');
const path = require('path');
const port = require('./settings/serverConfig').port;

let app = express();

require('./middleware/security')(app);
require('./middleware/staticRoutes')(app);

// ---------------------- initiate Routers  ------------------------------ //
require('./settings/routerConfig')(app);

// ---------------------- Google site identification ------------------------------ //
app.get('/googleda2a1d9b51c2edfd.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../qrp_WebApp/googleda2a1d9b51c2edfd.html'));
});

// -------------------------------- Fav ICON -------------------------------------- //
app.get('/favicon.ico', (req, res)=> {
  //if (req.url.includes('rules')) {
  res.sendFile(path.resolve(__dirname, '..', 'qrp_WebApp', 'favicon', 'favicon32.png'));
  /*} else if ( req.url.includes('temp') ){
    res.sendFile(path.resolve(__dirname, '..', 'public', 'favicon', 'LogoStructuralRules.png'));
  }*/
});

app.get('/', (req, res)=>{
  res.redirect('/rules');
});

app.use(require('./middleware/notFound'));

// --------------------------- Start Server ---------------------------//
app.listen(port, function() {
  console.log('Listening...' + port);	
});