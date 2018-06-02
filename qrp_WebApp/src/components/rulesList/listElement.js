import React from 'react';
import { Radio, TableCell } from '../index';

const localClassName = 'table-row'/*, prefix = 'letr_'*/;

export default class RuleListRowElement extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selected: false
    };

    Radio.listen(this.props.clearAction, () => {
      if( this.state.selected ){
        this.setState({selected: false});
      }
    });

    Radio.listen(this.props.selectAction, ( url ) => {
      if( this.state.href === url){
        this.setState({selected: true});
      }
    });
  }

  dispatchSelectMe(){
    Radio.emit( this.props.clearAction );
    this.setState({selected: true});
    //Radio.emit(lOADDETAILS, this.state.href);
  }

  render(){
    return (
      <tr className={localClassName.concat(this.state.selected ? ' selected' : '' )} onClick={()=>{
        this.dispatchSelectMe();
        this.props.onClick();}}>
        {this.renderCells()}
      </tr>
    );
  }

  renderCells(){
    if( this.props.values && this.props.el ){
      let k = 0;
      return this.props.values.map( val => <TableCell key={k++} critical={this.props.el.critical && val === 'critical'}>{this.props.el[val]}</TableCell>);
    }
  }
}
