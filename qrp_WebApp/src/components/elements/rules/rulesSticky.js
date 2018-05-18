import React from 'react';
import { RulesBody, LOADRULESLIST, RETURNTOSTART, Radio, UNSELECTME, UpdateURL, lOADDETAILS} from '../../index';


const localClassName = ['rulesList-container', 'static-overlay'],
  visibleClass = 'visible',
  sp = ' ';

export default class Rules extends React.Component{
  constructor(){
    super();

    this.state = {};

    Radio.listen( LOADRULESLIST, this.LoadRuleList.bind(this));
    Radio.listen( RETURNTOSTART, this.hideRuleList.bind(this));
  }

  hideRuleList(){
    this.setState({
      rulesVisible: false
    });
    history.pushState(null, null, '/');
    Radio.emit(UNSELECTME);
  }

  LoadRuleList( url, name ){
    if( url === this.state.rulesHref && name === this.state.title ) return;
    this.setState({
      rulesVisible: true,
      title: name,
      rulesHref: url,
    });
    Radio.emit(lOADDETAILS);
    UpdateURL(url, name);
  }

  render(){
    const safeSpace = /(%20)/g;
    return (
      <RulesBody visible={this.state.rulesVisible} 
        icon={this.state.title} 
        title={this.state.title ? this.state.title.replace(safeSpace, ' ') : undefined}
        href={this.state.rulesHref}/>
    );
  }

  getContainerClass( props ){
    return ((props && props.visible) ? localClassName.concat( visibleClass ).join( sp ) : localClassName.join( sp ));
  }
}