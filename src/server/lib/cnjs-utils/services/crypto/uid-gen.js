function uidGenerator() {
  const lut = [];
  
  for (let i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? "0" : "") + (i).toString(16);
  }

  /**
   * generate a unique uuid
   * @param {Object} options options
   * @param {boolean} options.useDash include - in the generated id (default: true)
   * @param {(16|32|64|128)} options.base char length (defaults: 32)
   * @returns {string} UUID
   */
  function generate(options = { useDash: true, base: 32 }) {
    const sep = options.useDash === undefined || options.useDash ? "-" : "";
    const d0 = Math.random() * 0xffffffff | 0;
    const d1 = Math.random() * 0xffffffff | 0;
    const d2 = Math.random() * 0xffffffff | 0;
    const d3 = Math.random() * 0xffffffff | 0;
    const d4 = Math.random() * 0xffffffff | 0;
    const d5 = Math.random() * 0xffffffff | 0;
    const d6 = Math.random() * 0xffffffff | 0;
    const d7 = Math.random() * 0xffffffff | 0;
    const d8 = Math.random() * 0xffffffff | 0;
    const d9 = Math.random() * 0xffffffff | 0;
    const da = Math.random() * 0xffffffff | 0;
    const db = Math.random() * 0xffffffff | 0;
    const dc = Math.random() * 0xffffffff | 0;
    const dd = Math.random() * 0xffffffff | 0;
    const de = Math.random() * 0xffffffff | 0;
    const df = Math.random() * 0xffffffff | 0;

    switch (options.base) {
    case 16:
      return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + sep + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + sep + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff];
    case 64: {
      return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + sep + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + sep + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + sep + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + sep + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff] + sep + lut[d4 & 0xff] + lut[d4 >> 8 & 0xff] + lut[d4 >> 16 & 0xff] + lut[d4 >> 24 & 0xff] + sep + lut[d5 & 0xff] + lut[d5 >> 8 & 0xff] + sep + lut[d5 >> 16 & 0x0f | 0x40] + lut[d5 >> 24 & 0xff] + sep + lut[d6 & 0x3f | 0x80] + lut[d6 >> 8 & 0xff] + sep + lut[d6 >> 16 & 0xff] + lut[d6 >> 24 & 0xff] + lut[d7 & 0xff] + lut[d7 >> 8 & 0xff] + lut[d7 >> 16 & 0xff] + lut[d7 >> 24 & 0xff];
    }
    case 128:{
      return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + sep + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + sep + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + sep + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + sep + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff] + sep + lut[d4 & 0xff] + lut[d4 >> 8 & 0xff] + lut[d4 >> 16 & 0xff] + lut[d4 >> 24 & 0xff] + sep + lut[d5 & 0xff] + lut[d5 >> 8 & 0xff] + sep + lut[d5 >> 16 & 0x0f | 0x40] + lut[d5 >> 24 & 0xff] + sep + lut[d6 & 0x3f | 0x80] + lut[d6 >> 8 & 0xff] + sep + lut[d6 >> 16 & 0xff] + lut[d6 >> 24 & 0xff] + lut[d7 & 0xff] + lut[d7 >> 8 & 0xff] + lut[d7 >> 16 & 0xff] + lut[d7 >> 24 & 0xff] + lut[d8 & 0xff] + lut[d8 >> 8 & 0xff] + lut[d8 >> 16 & 0xff] + lut[d8 >> 24 & 0xff] + sep + lut[d9 & 0xff] + lut[d9 >> 8 & 0xff] + sep + lut[d9 >> 16 & 0x0f | 0x40] + lut[d9 >> 24 & 0xff] + sep + lut[da & 0x3f | 0x80] + lut[da >> 8 & 0xff] + sep + lut[da >> 16 & 0xff] + lut[da >> 24 & 0xff] + lut[db & 0xff] + lut[db >> 8 & 0xff] + lut[db >> 16 & 0xff] + lut[db >> 24 & 0xff] + sep + lut[dc & 0xff] + lut[dc >> 8 & 0xff] + lut[dc >> 16 & 0xff] + lut[dc >> 24 & 0xff] + sep + lut[dd & 0xff] + lut[dd >> 8 & 0xff] + sep + lut[dd >> 16 & 0x0f | 0x40] + lut[dd >> 24 & 0xff] + sep + lut[de & 0x3f | 0x80] + lut[de >> 8 & 0xff] + sep + lut[de >> 16 & 0xff] + lut[de >> 24 & 0xff] + lut[df & 0xff] + lut[df >> 8 & 0xff] + lut[df >> 16 & 0xff] + lut[df >> 24 & 0xff];
    }
    default:
      return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + sep + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + sep + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + sep + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + sep + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
    }
  }

  return generate;
}

function keyGen(){
  const ugen = uidGenerator();

  const crypto = require("crypto");

  return "XCGN1-" + crypto
    .createHash("sha256")
    .update(ugen({ base: 128 }), "utf8")
    .digest("hex")
    .toUpperCase();
}

module.exports = {
  uidGenerator,
  keyGen,
};