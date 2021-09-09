const LINEBREAK = 10;
const CR_32 = 13;
const WS = 32;

/**
 * @param {Buffer} buff
 * @param {number} val
 */
function splitBuffer(buff, val){
  const len = buff.length;
  const res = [];

  let lidx = 0;

  for (let i = 0; i < len; i++) {
    if (buff[i] === val){
      res.push(buff.slice(lidx, i));

      lidx = i + 1;
    }
  }

  return res;
}

/**
 * @param {Buffer} buff 
 */
function trimBufferLeft(buff){
  const len = buff.length;

  let trim = 0;

  for (let i = 0; i < len; i++) {
    if (buff[i] === WS){
      trim++;
    } else break;
  }

  return buff.slice(trim);
}

/**
 * @param {Buffer} buff 
 */
function trimBufferRight(buff){
  const len = buff.length;

  let trim = 0;

  for (let i = len - 1; i > -1; i--) {
    if (buff[i] === WS){
      trim++;
    } else break;
  }

  return buff.slice(0, len - trim);
}

/**
 * @param {Buffer} buff 
 */
function trimBuffer(buff){
  return trimBufferRight(trimBufferLeft(buff));
}

/**
 * @param {Buffer[]} buff
 */
function filterEmpty(buffs){
  return buffs.filter(buf => buf.length !== 0);
}

class TextReader{

  /**
   * @param {Buffer} buffer 
   */
  constructor(buffer){
    this.__buf = buffer || Buffer.alloc(0);

    /**@type {Buffer[]} */
    this.__bufln = [];

    this.parseLines();
  }

  /** @returns {Buffer} Buffer */
  parseLines(){
    if (this.__bufln.length !== 0) return this.__bufln;
  
    let btext = Buffer.from(this.__buf);

    let idx = btext.indexOf(LINEBREAK);

    let CR32 = btext[idx - 1] === CR_32;

    let allocSize = idx - (CR32 ? 1 : 0);

    while (idx !== -1){
      const buff = Buffer.alloc(allocSize);

      btext.copy(buff, 0, 0, idx);
      btext = btext.slice(idx + 1);
    
      this.__bufln.push(buff);
    
      idx = btext.indexOf(LINEBREAK);
      
      if (idx === -1 && btext.length !== 0) idx = btext.length;

      CR32 = btext[idx - 1] === CR_32;
      allocSize = idx - (CR32 ? 1 : 0);
    }
  }

  /**
   * @param {number} n
   * @returns {Buffer}
   */
  readLine(n = 0){
    return this.__bufln[n];
  }

  /**
   * @param {number} n
   * @returns {Buffer[]}
   */
  readLines(){
    return this.__bufln;
  }
}
  
module.exports = TextReader;