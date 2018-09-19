import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES } from './constants';
import { Dropdown, List } from 'components/';
import './style.css';

export default class DropdownSelector extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      selected: undefined
    };

    this.onItemChange = this.onItemChange.bind(this);
    this.setSelectedItem = this.setSelectedItem.bind(this);
  }

  setSelectedItem( itemIndex ){
    this.setState({ selected: this.props.list[itemIndex] } );
  }

  onItemChange( index ){
    this.setSelectedItem(index);
    if( this.props.onItemClick ) this.props.onItemClick( this.props.list[index], index, this.props.list );
  } 

  componentDidMount(){
    this.onItemChange(this.props.defaultIndex || 0);
  }

  render(){
    return (
      <Dropdown label={<div className={CLASSES.label}>{( typeof  this.state.selected === 'object' ? ( this.state.selected.label ||  this.state.selected.name ) :  this.state.selected )}</div>}>
        <List vertical={true}>
          { this.props.list.map( ( e, i ) => {
            if( e === this.state.selected ) return;
            return (
              <div key={i} className={CLASSES.selectorItem} onClick={() => this.onItemChange(i)}>{( typeof e === 'object' ? ( e.label || e.name ) : e )}</div>
            );
          }) }
        </List>
      </Dropdown>
    );
  }
}

DropdownSelector.propTypes = {
  onItemClick: PropTypes.func,
};