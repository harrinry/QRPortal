import React from 'react';
import { Radio, lOADDETAILS, UNSELECTME} from '../index';

const localClassName = 'table-row', cellClass = 'table-cell', prefix = 'letr_';

export default class RuleListRowElement extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      href: props.el.href,
      selected: false
    };

    Radio.listen(UNSELECTME, () => {
      if( this.state.selected ){
        this.setState( _state => { 
          return { href: _state.href, selected: false}; 
        });
      }
    });
  }

  dispatchLoadDetails(){
    Radio.emit( UNSELECTME );
    this.setState( preState => { return { href: preState.href, selected: true}; });
    Radio.emit(lOADDETAILS, this.state.href);
  }

  render(){
    return (
      <tr className={localClassName.concat(this.state.selected ? ' selected' : '' )} onClick={function (){
        return this.dispatchLoadDetails();}.bind(this)}>
        <td className={cellClass}>{this.props.el.id}</td>
        <td className={cellClass}>{this.props.el.name}</td>
        <td className={cellClass}>{ this.props.el.critical ? this.props.el.critical.toString() : undefined}</td>
      </tr>
    );
  }
}