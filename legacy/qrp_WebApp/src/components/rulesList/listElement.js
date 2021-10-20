import React from 'react';
import { TableCell } from '../index';

const localClassName = 'table-row'/*, prefix = 'letr_'*/;

export default class RuleListRowElement extends React.Component{
  constructor(props){
    super(props);

    /*this.state = {
      selected: this.props.selected || false
    };

    /*Radio.listen(this.props.clearAction, () => {
      if( this.state.selected ){
        this.setState({selected: false});
      }
    });

    Radio.listen(this.props.selectAction, ( url ) => {
      //if( this.state.href === url){
      this.setState({selected: true});
      //}
    });
  }

  dispatchSelectMe(){
    Radio.emit( this.props.clearAction );
    this.setState({selected: true});
    //Radio.emit(lOADDETAILS, this.state.href);
  }

  componentWillReceiveProps( props ){
    if (props.selected) {
      this.setState(_state => {return {selected: _state.selected};});
    }*/
  }

  render(){
    return (
      <tr className={localClassName.concat(this.props.selected ? ' selected' : '' )} onClick={()=>{
        this.props.onSelected();
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
