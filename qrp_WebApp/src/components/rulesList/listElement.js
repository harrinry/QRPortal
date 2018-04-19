import React from 'react';
import { Radio, lOADDETAILS, UNSELECTME, SELECTME} from '../index';

const localClassName = 'table-row', cellClass = 'table-cell', criticalClass = 'critical-cell'/*, prefix = 'letr_'*/;

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

    Radio.listen(SELECTME, ( url ) => {
      if( this.state.href === url){
        this.setState( _state => {
          return { href: _state.href, selected: true};
        });
      }
    });
  }

  dispatchLoadDetails(){
    Radio.emit( UNSELECTME );
    // this.setState( preState => { return { href: preState.href, selected: true}; });
    Radio.emit(lOADDETAILS, this.state.href);
  }

  render(){
    return (
      <tr className={localClassName.concat(this.state.selected ? ' selected' : '' )} onClick={function (){
        return this.dispatchLoadDetails();}.bind(this)}>
        <td className={cellClass}>{this.props.el.id}</td>
        <td className={cellClass}>{this.props.el.name}</td>
        <td className={cellClass}><span className={this.props.el.critical ? criticalClass : undefined}>&nbsp;</span></td>
      </tr>
    );
  }
}
