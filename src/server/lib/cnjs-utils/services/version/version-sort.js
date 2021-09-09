const semver = require("semver");

function sortVersion(order = "descending", transform){
  return function sortFunc(a, b){
    if (transform){
      a = transform(a);
      b = transform(b);
    }
    if (order === "descending") {
      if (semver.lt(a, b)) return 1;
      if (semver.gt(a, b)) return -1;
      if (semver.eq(a, b)) return 0;
    } else if (order === "ascending") {
      if (semver.gt(a, b)) return 1;
      if (semver.lt(a, b)) return -1;
      if (semver.eq(a, b)) return 0;
    }
  };
}

module.exports = sortVersion;