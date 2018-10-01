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
    if(!this.props.stateDisabled){
      this.setSelectedItem(index);
    }
    if( this.props.onItemClick ) this.props.onItemClick( this.props.list[index], index, this.props.list );
  }

  componentDidMount(){
    this.onItemChange(this.props.defaultIndex || 0);
  }

  render(){
    const stateDisabled = this.props.stateDisabled,
      selected = this.props.selected || this.state.selected,
      label = !stateDisabled ? 
        ( typeof  selected === 'object' ? ( selected.label || selected.name ) : selected ) : 
        this.props.label;
    return (
      <Dropdown label={<div className={CLASSES.label}>{label}</div>}>
        <List vertical={true}>
          { this.props.list.map( ( e, i ) => {
            if( e === selected ) return;
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
  stateDisabled: PropTypes.bool,
};