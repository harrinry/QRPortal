module.exports = {
  ...require("./middleware"),
  ...require("./passport-configuration"),
  SSOCache: require("./sso-data-cache"),
  ExtendAuthWebClient: require("./auth-web-client"),
};