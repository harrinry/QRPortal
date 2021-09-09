function isNumber(charValue){
  return charValue >= 0x30 && charValue <= 0x39;
}

function isSymbol(charValue){
  return charValue === 0x2e || charValue === 0x2d || charValue === 0x5f;
}

function isLowerCase(charValue){
  return charValue >= 0x61 && charValue <= 0x7a;
}

function isUpperCase(charValue){
  return charValue >= 0x41 && charValue <= 0x5a;
}

function toUpper(charValue){
  return isLowerCase(charValue) 
    ? charValue - 0x20
    : charValue;
}

function toLower(charValue){
  return isUpperCase(charValue) 
    ? charValue + 0x20
    : charValue;
}

const sep = 0x20;
const dash = 0x2d;
const lodash = 0x5f;
const dot = 0x2e;

/**
 * @param {string} str 
 * @returns {Array<number>}
 */
function tokenify(str){
  const buff = Buffer.from(str);
  const buffl = buff.length;
  const out = [];

  for (let index = 0; index < buffl; index++) {
    const char = buff[index];

    if(isSymbol(char)) {
      out.push(sep);
    } else if(index !== 0 && isUpperCase(char)) {
      out.push(sep, char + 0x20);
    } else {
      out.push(toLower(char))
    }
  }

  return Buffer.from(out);
}

function seperatorBasedCase(str, seperator){
  const tkns = tokenify(str);
  const tknsl = tkns.length;
  const output = Buffer.alloc(tknsl);
  let prevWasSep = false;

  for (let index = 0; index < tknsl; index++) {
    const tkn = tkns[index];

    if(tkn === sep) {
      if(prevWasSep){
        continue;
      } else {
        output[index] = seperator;
      }
      prevWasSep = true;
    } else {
      output[index] = tkn;
      prevWasSep = false;
    }
  }

  return trimOutput(output);
}

function capitalizationBasedCase(str, initCapitalized){
  const tkns = tokenify(str);
  const tknsl = tkns.length;
  const output = Buffer.alloc(tknsl);
  let capitalize = initCapitalized;
  let offset = 0;

  for (let index = 0; index < tknsl; index++) {
    let tkn = tkns[index];

    if(tkn === sep) {
      capitalize = true;
      offset++;
      continue;
    } else {
      output[index - offset] = capitalize ? toUpper(tkn) : tkn;
      capitalize = false;
    }

  }

  return trimOutput(output);
}

function spaceSeparated(str){
  return seperatorBasedCase(str, sep);
}

/**
 * @param {string} str 
 */
function toParamCase(str){
  return seperatorBasedCase(str, dash);
}

/**
 * @param {string} str 
 */
function toSnakeCase(str){
  return seperatorBasedCase(str, lodash);
}

/**
 * @param {string} str 
 */
function toDotCase(str){
  return seperatorBasedCase(str, dot);
}

/**
 * @param {string} str 
 */
function toPascalCase(str){
  return capitalizationBasedCase(str, true);
}

/**
 * @param {string} str 
 */
function toCamelCase(str){
  return capitalizationBasedCase(str, false);
}

/**
 * @param {Buffer} buff 
 */
function trimOutput(buff){
  return buff.filter(_ => _ !== 0x00).toString();
}

module.exports = {
  toParamCase,
  toSnakeCase,
  toDotCase,
  toPascalCase,
  toCamelCase,
  seperatorBasedCase,
  capitalizationBasedCase,
  spaceSeparated,
};