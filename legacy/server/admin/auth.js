const auth = require('http-auth');
const basic = auth.basic({
  realm: 'Administration',
  file: __dirname + '/admin.htpasswd'
});

module.exports = auth.connect(basic);