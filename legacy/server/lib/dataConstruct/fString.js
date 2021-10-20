function fString( str, ...defaultValues ){
  const __String = str;
  const __values = defaultValues;

  this.print = function print( ...values ){
    const vals = values.length > 0 ? values : __values;
    return formatString(__String, ...vals);
  };

  return this;
}

function formatString( str, ...args ){
  const r = /{(\d+)}/g;
  return str.replace( r, ( match, number ) => {
    return args[number] !== undefined
      ? args[number]
      : match;
  });
}

module.exports = fString;