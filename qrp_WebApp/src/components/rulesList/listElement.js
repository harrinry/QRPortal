import React from 'react';
import {Radio} from '../index';
import {lOADDETAILS} from './actions';
const localClassName = 'table-row', cellClass = 'table-cell';

export default class RuleListRowElement extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      href: props.el.href
    };
  }

  dispatchLoadDetails(){
    Radio.emit(lOADDETAILS, this.state.href);
  }

  render(){
    return (
      <tr className={localClassName} onClick={function (){ return this.dispatchLoadDetails();}.bind(this)}>
        <td className={cellClass}>{this.props.el.id}</td>
        <td className={cellClass}>{this.props.el.name}</td>
        <td className={cellClass}>{this.props.el.critical.toString()}</td>
      </tr>
    );
  }
}