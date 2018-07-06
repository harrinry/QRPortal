import React from 'react';
import {Radio, lOADDETAILS, StandardList, RuleListRowElement, APIQuery, LISTLENGTH, SELECTME, SELECTME2, UNSELECTME, UNSELECTME2} from '../index';

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
    Radio.emit(LISTLENGTH, this.props.isStandard ? this.state.els.length : this.state.els2.length );
    return (this.props.isStandard ? ( <StandardList l50={true} headers={standardHeaders}>
      {this.buildListFromState(this.state.els, this.loadRuleDetails, standardValues, SELECTME, UNSELECTME)}
    </StandardList> ) : (<div>
      <StandardList l20={true} headers={['Standard Name']}>
        {this.buildListFromState(this.state.els, this.queryForNextList.bind(this), nameValOnly , SELECTME, UNSELECTME)}
      </StandardList>
      <StandardList l30={true} headers={standardHeaders}>{this.buildListFromState(this.state.els2, this.loadRuleDetails, standardValues, SELECTME2, UNSELECTME2)}</StandardList>
    </div>));
  }

  queryForNextList( url, count ){
    if ( count === 0 ){
      this.setState( _state => {
        return ( { els: _state.els, els2: [] } );
      } );
      this.loadRuleDetails();
    } else {
      APIQuery( url + '/quality-rules', res => {
        this.setState( _state => {
          return ( { els: _state.els, els2: res.data } );
        } );
        this.loadRuleDetails();
      });
    }
  }

  buildListFromState( arr, onClickFunction, values, selectAction, clearAction ){
    let key = 0;
    return arr.length === 0 ? 
      <tr><td colSpan='3' key={prefix + key++}>No Rules</td></tr> :
      arr.map( el => <RuleListRowElement selectAction={selectAction} clearAction={clearAction} values={values} el={el} key={prefix + key++} onClick={onClickFunction ? () => onClickFunction(el.href, el.count) : undefined}/>);
  }

  loadRuleDetails( url ){
    Radio.emit( lOADDETAILS, url );
  }
}
