import React from 'react';
import {StandardList, RuleListRowElement, APIQuery} from '../index';

const prefix = 'keyx_';

export default class RulesList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      els: []
    };
  }

  componentWillReceiveProps( props ){
    if ( props.href ){
      APIQuery(props.href, res => this.setState({els: res.data}));
    }
  }

  render(){
    return (this.props.isStandard ? ( <StandardList>
      {this.buildListFromState()}
    </StandardList> ) : (<div></div>));
  }

  buildListFromState(){
    return this.state.els.map( el => <RuleListRowElement el={el} key={prefix + el.id} />);
  }
}
