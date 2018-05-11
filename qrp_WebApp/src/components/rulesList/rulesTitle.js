import React from 'react';
import { Radio, LISTLENGTH } from '../index';

const TitleheaderClasses = ['rules-title', 'block'],
  iconClasses = ['inline', 'floatLeft', 'icon'],
  titleClasses = ['title-container', 'inline'],
  titleBody = 'title-body',
  sp = ' ';

export default class RulesTitle extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    Radio.listen(LISTLENGTH, ( len ) => this.setState({len: len}));
  }

  render(){
    return (
      <div className={TitleheaderClasses.join( sp )}>
        <div className={iconClasses.concat( this.props.icon ).join( sp )}></div>
        <div className={ titleClasses.join( sp ) }>
          <h2 className={ titleBody }>{ this.state.len } Rules</h2>
        </div>
      </div>
    );
  }
}