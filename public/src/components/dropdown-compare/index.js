import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES, COMPARE_IMG, COMPARE_IMG_COMPARING } from './constants';
import { createClassName } from 'common/';
import { DropdownSelector } from 'components/';
import './style.css';

export default class DropdownCompare extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {
      comparing: false,
      first: undefined,
      second: undefined
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.firstListChanged = this.firstListChanged.bind(this);
    this.toggleCompare = this.toggleCompare.bind(this);
    this.secondListChanged = this.secondListChanged.bind(this);
  }

  toggleCompare(){
    this.setState(_state => Object.assign({}, _state, { comparing: !_state.comparing, second: _state.second || this.props.list[1] }));
    if( !this.props.stateEnabled && this.props.toggleCompare ) this.props.toggleCompare(this.props.compareEnabled);
  }

  handleDropdownChange( first, second ){
    if(this.state.comparing) this.props.onCompare(first, second);
    else this.props.onItemSelect(first);
  }

  firstListChanged( item ){
    this.setState( _state => {
      return {
        ..._state,
        first: item
      };
    });
    this.handleDropdownChange(item, this.state.second);
  }

  secondListChanged( item ){
    this.setState( _state => {
      return {
        ..._state,
        second: item
      };
    });
    this.handleDropdownChange(this.state.first, item);
  }

  render(){
    const stateEnabled = this.props.disableState ? false : true;
    const isCompareEnabled = ((stateEnabled && this.state.comparing) || (!stateEnabled && this.props.compareEnabled)) ? true : false;
    return (
      <span className={CLASSES.container}>
        <DropdownSelector list={this.props.list} defaultIndex={0} onItemClick={this.firstListChanged}/>
        <div className={createClassName(CLASSES.compareImgContainer, isCompareEnabled ? CLASSES.isComparing : undefined)}><img src={isCompareEnabled ? COMPARE_IMG_COMPARING : COMPARE_IMG} className={CLASSES.compareImg} onClick={this.toggleCompare}/></div>
        { (this.state.comparing && stateEnabled) || this.props.CompareEnabled  ? <DropdownSelector list={this.props.list} defaultIndex={1} onItemClick={this.secondListChanged}/> : undefined }
      </span>
    );
  }
}

DropdownCompare.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  onItemSelect: PropTypes.func.isRequired,
  onCompare: PropTypes.func.isRequired,
};
