module.exports = function ( hydrateData ) {
  return (`<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>CAST Structural Rules</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="mkt/css/cta-styles">
  </head>
  <body>
    <div id="react-root"></div>
  
    <script type="text/javascript">
      window.__CQRPHYDRATE__ = "${hydrateData}";
    </script>
    <script type="text/javascript" src="rules/bundle.js" defer></script>
  </body>
  </html>`);
};