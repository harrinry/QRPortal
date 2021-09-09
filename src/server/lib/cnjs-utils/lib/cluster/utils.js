const os = require("os");
const cluster = require("cluster");

const ClusterTargets = {
  master: "master",
  workers: "workers",
  all: "all",
}

function getCoreCount(){
  return os.cpus().length;
}

/**
 * @param {import("./utils").ClusterTargets | number} target 
 */
function isClusterTarget( target ){
  if( target === "master" && cluster.isMaster ) {
    return true;
  } else if( target === "workers" && cluster.isWorker ){
    return true;
  } else if( target === "all" ){
    return true;
  } else if( typeof target === "number" && cluster.isWorker && cluster.worker.id === target ){
    return true
  }

  return false;
}

/**
 * @param {import("./utils").ClusterTargets | number} target 
 */
function clusterBlock( target ){
  if( !isClusterTarget( target ) ) {
    return () => {};
  }

  return function clusterCallbackExe( callback, onError ){
    try {
      callback();
    } catch (error) {
      if( onError ){
        onError( error );
      } else {
        throw error;
      }
    }
  }
}

module.exports = {
  getCoreCount,
  clusterBlock,
  ClusterTargets,
};