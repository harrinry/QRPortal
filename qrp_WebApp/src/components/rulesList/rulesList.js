import React from 'react';
import {RuleListRowElement,APIQuery} from '../index';

const localClassName = ['ruleList-container', 'table-container', 'L50-margins', 'scrollbar-small'],
  sp = ' ',
  prefix = 'keyx_';

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
    return (
      <div className={localClassName.join( sp )} >
        <table>
          <tbody>
            <tr>
              <th>ID</th><th>Name</th><th>Critical?</th>
            </tr>
            {this.buildListFromState()}
          </tbody>
        </table>
      </div>
    );
  }

  buildListFromState(){
    return this.state.els.map( el => <RuleListRowElement el={el} key={prefix + el.id} />);
  }
}
