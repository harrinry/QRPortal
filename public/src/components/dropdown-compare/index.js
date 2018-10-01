import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES, COMPARE_IMG, COMPARE_IMG_COMPARING, COMPARE_WHITE, COMPARE_TO } from './constants';
import { createClassName } from 'common/';
import { DropdownSelector } from 'components/';
import './style.css';

export default class DropdownCompare extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {
      hover: false,
      comparing: false,
      first: this.props.disableState ? this.props.params[0] : undefined,
      second: this.props.disableState ? this.props.params[1] : undefined,
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.firstListChanged = this.firstListChanged.bind(this);
    this.toggleCompare = this.toggleCompare.bind(this);
    this.secondListChanged = this.secondListChanged.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
  }

  toggleCompare(){
    this.setState(_state => Object.assign({}, _state, { comparing: !_state.comparing, second: _state.second || this.props.list[1] }));
    if( !this.props.stateEnabled && this.props.toggleCompare ) this.props.toggleCompare(this.props.compareEnabled);
  }

  handleDropdownChange( first, second ){
    if(this.state.comparing) this.props.onCompare(first, second);
    else this.props.onItemSelect(first, this.props);
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

  mouseEnter(){
    return this.setState(_state => { return {..._state, hover: true }; });
  }

  mouseExit(){
    return this.setState(_state => { return {..._state, hover: false }; });
  }

  render(){
    const stateEnabled = this.props.disableState ? false : true;
    const isCompareEnabled = ((stateEnabled && this.state.comparing) || (!stateEnabled && this.props.compareEnabled)) ? true : false;
    const defaultIndex1 = this.props.params[0] ? this.props.list.findIndex( e => e.name === this.props.params[0].name) : -1,
      defaultIndex2 = this.props.params[1] ? this.props.list.findIndex(e => e.name === this.props.params[1].name) : -1,
      compareImgCmp = this.state.hover ? COMPARE_IMG_COMPARING : COMPARE_IMG,
      listLength = this.props.list.length;
    return (
      <span className={CLASSES.container}>
        <DropdownSelector 
          list={this.props.list} 
          defaultIndex={ defaultIndex1 !== -1 ? defaultIndex1 : 0} 
          label={this.props.params[0] ? this.props.params[0].label : ''} 
          stateDisabled={true} 
          onItemClick={this.firstListChanged}
          selected={this.props.params[0]}/>
        { listLength > 1 ? <div 
          onClick={this.toggleCompare}
          className={createClassName(CLASSES.compareImgContainer, isCompareEnabled ? CLASSES.isComparing : undefined)} >
          <img 
            onMouseEnter={this.mouseEnter} 
            onMouseLeave={this.mouseExit} 
            src={isCompareEnabled ? COMPARE_WHITE : compareImgCmp} 
            className={CLASSES.compareImg} />
          <div className={createClassName(CLASSES.onHoverText, this.state.hover ? CLASSES.isHoverState : undefined)}>{COMPARE_TO}</div>
        </div> : undefined}
        { ((this.state.comparing && stateEnabled) || this.props.compareEnabled ) ? 
          <DropdownSelector label={this.props.params[1] ? this.props.params[1].label : ''} selected={this.props.params[0]} stateDisabled={true} list={this.props.list} defaultIndex={defaultIndex2 !== -1 ? defaultIndex2 : 1} onItemClick={this.secondListChanged}/> : 
          undefined }
      </span>
    );
  }
}

DropdownCompare.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  onItemSelect: PropTypes.func.isRequired,
  onCompare: PropTypes.func.isRequired,
  compareEnabled: PropTypes.bool,
  disableState: PropTypes.bool,
  params: PropTypes.arrayOf(PropTypes.any)
};
