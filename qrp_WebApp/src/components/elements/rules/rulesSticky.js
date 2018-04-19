import React from 'react';
import { RulesBody, LOADRULESLIST, RETURNTOSTART, Radio, UNSELECTME, UpdateURL} from '../../index';


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
    this.setState({
      rulesVisible: true,
      title: name,
      rulesHref: url,
    });

    UpdateURL(url, name);
  }

  render(){
    return (
      <RulesBody visible={this.state.rulesVisible} 
        icon={this.state.title} 
        title={this.state.title}
        href={this.state.rulesHref}
        details={this.state.details}/>
    );
  }

  getContainerClass( props ){
    return ((props && props.visible) ? localClassName.concat( visibleClass ).join( sp ) : localClassName.join( sp ));
  }
}