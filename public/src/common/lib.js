export function createClassName( ...classes ){
  return classes.filter( cls => cls !== undefined && cls !== null).join(' ');
}