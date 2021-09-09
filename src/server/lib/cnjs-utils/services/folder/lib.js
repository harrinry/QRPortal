const path = require("path");
const fs = require("fs");

function accendPath(directory){
  return path.resolve(directory, "..");
}

function isProjectRoot(directory){
  return fs.existsSync(path.join(directory, "package.json"));
}

function searchPath(_path, conditional, searchPathResolve = accendPath){
  return conditional(_path)
    ? _path
    : searchPath(searchPathResolve(_path), conditional, searchPathResolve);
}

function getProjectRoot(currentDir){
  return searchPath(currentDir, isProjectRoot);
}

module.exports = {
  getProjectRoot,
  accendPath,
  isProjectRoot,
  searchPath,
};