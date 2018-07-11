import React from 'react';
import { UpdateURL,Radio, lOADDETAILS, StandardList, RuleListRowElement, APIQuery, LISTLENGTH, SELECTME, SELECTME2, UNSELECTME, UNSELECTME2 } from '../index';

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
    if ( props.href && this.props.href !== props.href ){
      APIQuery(props.href, res => {
        
        const det = history.state ? history.state.rlDH : undefined;
        let _data;
        if ( det /*&& !props.href2*/ ){
          const id = det.substring( 18 );
          _data = res.data.map( e =>{
            if( e.id == id ){
              return Object.assign({}, e, {selected:true});
            } else return Object.assign({}, e, {selected:false});
          } );
        }
        this.setState({els: _data || res.data, els2: []});
      });
    }
    if ( props.href2 && this.props.href2 !== props.href2 ){
      APIQuery(props.href2, res => {

        const det = history.state ? history.state.rlDH : undefined;
        
        const els = this.state.els.map( e => {
          if( e.href + '/quality-rules' === props.href2  ) {
            return Object.assign({}, e, {selected:true});
          } else return e;
        } );
        let _data;
        if ( det ){
          const id = det.substring( 18 );

          _data = res.data.map( e =>{
            if( e.id == id ){
              return Object.assign({}, e, {selected:true});
            } else return Object.assign({}, e, {selected:false});
          } );
        }

        this.setState({els: els, els2: _data || res.data});
        
      });
    }
  }

  render(){
    Radio.emit(LISTLENGTH, this.props.isStandard ? this.state.els.length : this.state.els2.length );
    return (this.props.isStandard ? ( <StandardList l50={true} headers={standardHeaders}>
      {this.buildListFromState(this.state.els, this.loadRuleDetails, standardValues, 'els')}
    </StandardList> ) : (<div>
      <StandardList l20={true} headers={['Standard Name']}>
        {this.buildListFromState(this.state.els, this.queryForNextList.bind(this), nameValOnly, 'els')}
      </StandardList>
      <StandardList l30={true} headers={standardHeaders}>{this.buildListFromState(this.state.els2, this.loadRuleDetails, standardValues, 'els2' )}</StandardList>
    </div>));
  }

  queryForNextList( url, count ){
    if ( count === 0 ){
      this.setState( _state => {
        return ( { els: _state.els, els2: [] } );
      } );
      UpdateURL(null, null, null);
      this.loadRuleDetails();
    } else {
      APIQuery( url + '/quality-rules', res => {
        this.setState( _state => {
          return ( { els: _state.els, els2: res.data } );
        } );
        UpdateURL(null, null, url+'/quality-rules');
        this.loadRuleDetails();
      });
    }
  }

  buildListFromState( arr, onClickFunction, values, listName ){
    let key = 0;
    return arr.length === 0 ? 
      <tr><td colSpan='3' key={prefix + key++} style={{textAlign: 'center', paddingTop: '100%'}}>No Rules</td></tr> :
      arr.map( (el, idx) => <RuleListRowElement onSelected={() => this.setSelected( arr, listName, idx )} selected={el.selected} values={values} el={el} key={prefix + key++} onClick={onClickFunction ? () => onClickFunction(el.href, el.count) : undefined}/>);
  }

  loadRuleDetails( url ){
    Radio.emit( lOADDETAILS, url );
  }

  setSelected( arr, arrID, index ){
    return this.setState( _state => {
      if (arrID === 'els') {
        return {
          els: this.setSelectedInList( arr, index ),
          els2: []
        };
      } else {
        return {
          els: _state.els,
          els2: this.setSelectedInList( arr, index )
        };
      }
    } );
  }

  setSelectedInList( arr, index ){
    return arr.map( (e, i) => {
      if( i === index ){
        return Object.assign({}, e, {selected: true});
      } else {
        return Object.assign({}, e, {selected: false});
      }
    });
  }
}
