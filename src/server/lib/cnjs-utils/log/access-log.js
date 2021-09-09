function pad(num) {
  return (num > 9 ? "" : "0") + num;
}
 
function generator(time, index) {
  if (!time) {
    time = new Date(Date.now());
    index = 0;
  }
  const year = time.getFullYear();
  const month = pad(time.getMonth() + 1);
  const day = pad(time.getDate());

  return `access-${year}-${month}-${day}${index === 0 ? "" : `.${index}`}.log`;
}

function accessLogFactory(logDir, fileNameGenerator = generator){
  const morgan = require("morgan");
  const rfs = require("rotating-file-stream");

  return morgan("combined", {
    stream: rfs.createStream(fileNameGenerator, {
      interval: "1d",
      size: "20M",
      path: logDir || "LOGS",
    }),
  });
}

module.exports = {
  accessLogFactory,
  fileNameGenerator: generator,
};
