import React from 'react';
import { Radio, UNSELECTME, SELECTME} from '../index';

const localClassName = 'table-row', cellClass = 'table-cell', criticalClass = 'critical-cell'/*, prefix = 'letr_'*/;

export default class RuleListRowElement extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selected: false
    };

    Radio.listen(UNSELECTME, () => {
      if( this.state.selected ){
        this.setState({selected: false});
      }
    });

    Radio.listen(SELECTME, ( url ) => {
      if( this.state.href === url){
        this.setState({selected: true});
      }
    });
  }

  dispatchSelectMe(){
    Radio.emit( UNSELECTME );
    this.setState({selected: true});
    //Radio.emit(lOADDETAILS, this.state.href);
  }

  render(){
    return (
      <tr className={localClassName.concat(this.state.selected ? ' selected' : '' )} onClick={()=>{
        this.dispatchSelectMe();
        this.props.onClick();}}>
        <td className={cellClass}>{this.props.el.id}</td>
        <td className={cellClass}>{this.props.el.name}</td>
        <td className={cellClass}><span className={this.props.el.critical ? criticalClass : undefined}>&nbsp;</span></td>
      </tr>
    );
  }
}
