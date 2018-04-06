
let events = {};

export default {
  listen: function (eventName, callback){
    events[eventName] = events[eventName] || [];
    events[eventName].push(callback);
  },
  halt: function (eventName, callback) {
    let e = events[eventName];
    if (e) {
      let l = e.length;
      for (let i = 0; i < l; i++) {
        if (e[i] === callback) {
          e.splice(i,1);
          break;
        }
      }
    }
  },
  emit: function (eventName, ...data) {
    let ev = events[eventName];
    if (ev) {
      ev.forEach(function(callback) {
        callback(...data);
      });
    }
  }
};
