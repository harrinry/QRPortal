export default function updateURL( href, name/*, detailsHref */){
  const prevState = window.history.state,
    nextState = {
      rlH: href || (prevState ? prevState.rlH : undefined),
      rlName: name || (prevState ? prevState.rlName : undefined),
      //rlDH: detailsHref || undefined
    },
    valSeparator = '=', propSeparator = '&', qqstr = 'QRP_QueryStr';

  let qStr = ['?'];
  
  for (const key in nextState) {
    if (nextState.hasOwnProperty(key)) {
      const val = nextState[key];
      if ( val ) qStr.push( key, valSeparator, val, propSeparator);
    }
  }

  qStr.pop();

  window.history.pushState( nextState, qqstr, qStr.join('') );
}
