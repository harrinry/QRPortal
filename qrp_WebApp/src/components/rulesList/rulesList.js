import React from 'react';
import {Radio, lOADDETAILS, StandardList, RuleListRowElement, APIQuery} from '../index';

const prefix = 'keyx_',
  standardHeaders = [ 'ID', 'Name', 'Critical?'],
  standardValues = ['id', 'name', 'critical'],
  nameValOnly = ['name'];

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
      {this.buildListFromState(this.state.els, this.loadRuleDetails, standardValues)}
    </StandardList> ) : (<div>
      <StandardList l20={true} headers={['Standard Name']}>
        {this.buildListFromState(this.state.els, this.queryForNextList.bind(this), nameValOnly )}
      </StandardList>
      <StandardList l30={true} headers={standardHeaders}>{this.buildListFromState(this.state.els2, this.loadRuleDetails, standardValues)}</StandardList>
    </div>));
  }

  queryForNextList( url ){
    APIQuery( url, res => this.setState( _state => {
      return ( { els: _state.els, els2: res.data } );
    }) );
  }

  buildListFromState( arr, onClickFunction, values ){
    let key = 0;
    return arr.map( el => <RuleListRowElement values={values} el={el} key={prefix + key++} onClick={onClickFunction ? () => onClickFunction(el.href) : undefined}/>);
  }

  loadRuleDetails( url ){
    Radio.emit( lOADDETAILS, url );
  }
}
