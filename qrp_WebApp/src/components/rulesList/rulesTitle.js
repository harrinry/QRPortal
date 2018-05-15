import React from 'react';

const TitleheaderClasses = ['rules-title', 'block'],
  iconClasses = ['inline', 'floatLeft', 'icon'],
  titleClasses = ['title-container', 'inline'],
  titleBody = 'title-body',
  sp = ' ';

export default class RulesTitle extends React.Component{
  render(){
    return (
      <div className={TitleheaderClasses.join( sp )}>
        <div className={iconClasses.concat( this.props.icon ).join( sp )}></div>
        <div className={ titleClasses.join( sp ) }>
          <h2 className={ titleBody }>{this.props.title}</h2>
        </div>
      </div>
    );
  }
}