const SIGNALS = require("./sig");

function setCleanup(handler){

  for (const key in SIGNALS) {
    const SIGNAL = SIGNALS[key];

    process.addListener(SIGNAL, async() => {
      if (handler instanceof Promise || handler.constructor.name === "AsyncFunction") {
        await handler();
      } else {
        handler();
      }

      process.exit();
    });
  }

}

function removeCleanup(){
  for (const key in SIGNALS) {
    const SIGNAL = SIGNALS[key];

    process.removeAllListeners(SIGNAL);
  }
}

module.exports = {
  setCleanup,
  removeCleanup,
};