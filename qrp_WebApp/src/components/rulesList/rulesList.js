import React from 'react';
import {Radio, lOADDETAILS, StandardList, RuleListRowElement, APIQuery} from '../index';

const prefix = 'keyx_',
  standardHeaders = [ 'ID', 'Name', 'Critical?'];

export default class RulesList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      els: [],
      els2: []
    };
  }

  componentWillReceiveProps( props ){
    if ( props.href && this.props.href !== props.href){
      APIQuery(props.href, res => this.setState({els: res.data, els2: []}));
    }
  }

  render(){
    return (this.props.isStandard ? ( <StandardList l50={true} headers={standardHeaders}>
      {this.buildListFromState(this.state.els, this.loadRuleDetails)}
    </StandardList> ) : (<div>
      <StandardList l33={true} headers={['Name']}>{this.buildListFromState(this.state.els, this.queryForNextList.bind(this) )}</StandardList>
      <StandardList l33={true} headers={standardHeaders}>{this.buildListFromState(this.state.els2, this.loadRuleDetails)}</StandardList>
    </div>));
  }

  queryForNextList( url ){
    APIQuery( url, res => this.setState( _state => {
      return ( { els: _state.els, els2: res.data } );
    }) );
  }

  buildListFromState( arr, onClickFunction ){
    let key = 0;
    return arr.map( el => <RuleListRowElement el={el} key={prefix + key++} onClick={onClickFunction ? () => onClickFunction(el.href) : undefined}/>);
  }

  loadRuleDetails( url ){
    Radio.emit( lOADDETAILS, url );
  }
}