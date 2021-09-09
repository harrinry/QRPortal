const { HttpErrorFactory, RegistryError } = require("../../lib/cnjs-utils/server/http-error-v2");
const locales = require("./locales");
const ecodes = require("./error-codes");
const errors = require("./errors");

const factory = new HttpErrorFactory();

for (const locale in locales) {
  for (const ecode in ecodes) {
    const code = ecodes[ecode];

    if(!errors[code]) continue;

    const error = errors[code];
    const msg = error.message[locale] || error.message[locales.en];
    const details = error.details[locale] || error.message[locales.en];

    factory.registerErrCodes(locale, new RegistryError(code, msg, details));
  }
}

module.exports = factory;