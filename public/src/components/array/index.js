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
    const { headers } = this.props;
    const filteredChildren = this.filterChildren();
    return (<div className={createClassName(CLASSES.verticalArray, COMMON_CLASSES.flexCol)}>
      <div className={createClassName('headerContainer', COMMON_CLASSES.flexRow)}>
        <div className={CLASSES.itemCounter}>{filteredChildren.length + ' Rules'}</div>
        <div className={CLASSES.internalFilter}>
          <input value={this.state.filterValue} placeholder={'Filter Rules'} onChange={this.onfilterChange}></input>
        </div>
      </div>
      <div className={createClassName('TableContainer', COMMON_CLASSES.flexCol, COMMON_CLASSES.overflowY)}>
        <table>
          <tbody>
            <tr>{headers.map(h => <th>{h}</th>)}</tr>
            { filteredChildren.length !== 0 ? filteredChildren.map( val => <tr><td>{val.id}</td><td>{val.name}</td><td>{val.critical}</td></tr> ) : 
              <tr><td colSpan={headers.length}>{this.props.onEmpty}</td></tr>}
          </tbody>
        </table>
      </div>
    </div>);
  }
} 

VerticalArray.propTypes = {
  headers: PropTypes.array.isRequired,
  children: PropTypes.array
};

export default VerticalArray;