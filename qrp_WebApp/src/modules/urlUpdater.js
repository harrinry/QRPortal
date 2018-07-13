export default function updateURL( href, detailsHref, href2 ){
  const prevState = window.history.state,
    nextState = {
      rlH: href || (prevState ? prevState.rlH : undefined),
      rlH2: href2 || (prevState ? prevState.rlH2 : undefined),
      rlDH: detailsHref || undefined
    },
    valSeparator = '=', propSeparator = '&', qqstr = 'QRP_QueryStr';

  let qStr = ( nextState.rlH ? ['?'/*, 'rlH', valSeparator, nextState.rlH */] : []);
  
  for (const key in nextState) {
    if (nextState.hasOwnProperty(key)) {
      const val = nextState[key];
      if ( val ) qStr.push( key, valSeparator, val, propSeparator);
    }
  }

  qStr.pop();

  window.history.pushState( nextState, qqstr, qStr.join('') );
}
