import React from 'react';
import PropTypes from 'prop-types';
import { createClassName, COMMON_CLASSES } from 'common/';
import { CLASSES } from './constants';
import './style.css';

class VerticalArray extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      filterValue:''
    };

    this.onfilterChange = this.onfilterChange.bind(this);
  }

  componentWillReceiveProps(){
    this.setState({filterValue: ''});
  }

  onfilterChange( event ){
    this.setState({filterValue: event.target.value});
  }

  filterChildren(){
    return this.props.children.filter(c => {
      if (this.state.filterValue === '') {
        return c;
      } else {
        if(this.props.compare) {
          if(this.props.compare(this.state.filterValue, c)) return c;
        } else {
          return c;
        }
      }
    });
  }

  render(){
    const { headers, childConstructor, itemCountTitle, filterPlaceholder } = this.props;
    const filteredChildren = this.filterChildren();
    return (<div className={createClassName(CLASSES.verticalArray, COMMON_CLASSES.flexCol)}>
      <div className={createClassName(CLASSES.headerContainer, COMMON_CLASSES.flexRow)}>
        <div className={CLASSES.itemCounter}>{filteredChildren.length + ' ' + itemCountTitle}</div>
        <div className={CLASSES.internalFilter}>
          <input value={this.state.filterValue} placeholder={filterPlaceholder} onChange={this.onfilterChange}></input>
        </div>
      </div>
      <div className={createClassName(CLASSES.tableContainer, COMMON_CLASSES.flexCol, COMMON_CLASSES.overflowY)}>
        <table>
          <thead>
<<<<<<< HEAD
            <tr>{headers.map(h => <th>{h}</th>)}</tr>
          </thead>
          <tbody>
            {filteredChildren.length !== 0 ? filteredChildren.map( val => childConstructor(val) ) : 
=======
            <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {filteredChildren.length !== 0 ? filteredChildren.map( (val, i) => childConstructor(val, i) ) : 
>>>>>>> backend_dev_msu
              <tr><td colSpan={headers.length}>{this.props.onEmpty}</td></tr>}
          </tbody>
        </table>
      </div>
    </div>);
  }
} 

VerticalArray.propTypes = {
  headers: PropTypes.array.isRequired,
  itemCountTitle: PropTypes.string.isRequired,
  filterPlaceholder: PropTypes.string.isRequired,
  children: PropTypes.array,
  childConstructor: PropTypes.func.isRequired
};

export default VerticalArray;