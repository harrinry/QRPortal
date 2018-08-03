import React from 'react';
import { createClassName, COMMON_CLASSES } from 'common/';
import { CLASSES, TEXTINPUT, INPUTREF, ENTER } from './gs-constants';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import './style.css';

export default class GlobalSearch extends React.PureComponent{
  constructor(props){
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <div className={createClassName(CLASSES.container, ( props.viewType === VIEW_TYPES.TILES_VIEW ? COMMON_CLASSES.floatRight : undefined ))}>
        <input type={TEXTINPUT} ref={INPUTREF} className={CLASSES.inputBox} placeholder={props.language.search} onKeyPress={ (event) => {
          const key = event.key;
          if (key === ENTER) {
            props.fetchSearchResults( this.refs[INPUTREF].value );
            this.refs[INPUTREF].value = '';
          }
        }}/>
      </div>
    );
  }
}