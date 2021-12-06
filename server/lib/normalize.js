const jsonExt = '.json';
 
function normalize(url){
    if (/(AIP|CARL|AC)/ig.test(url))
        return normalizeFileName(url);
    
    // add AIP as a default prefix
    return 'AIP/'.concat( normalizeFileName(url));
}
 
function normalizeFileName( fileName ){
    // add json as extension file name when required
    return (/(\.json)/ig.test(fileName) ? fileName : fileName + jsonExt);
}
 
module.exports = normalize;