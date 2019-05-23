import React from 'react';
import PropTypes from 'prop-types';
import { createClassName, COMMON_CLASSES } from 'common/';
import { LoadingSpinner } from 'components/';
import { CLASSES } from './constants';
import './style.css';

class VerticalArray extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      filterValue:'',
      filterDropDown: false
    };

    this.onfilterChange = this.onfilterChange.bind(this);
    this.filterDropDown = this.filterDropDown.bind(this);
  }

  componentWillReceiveProps( nextprops ){
    const currentIds = this.props.children.map( e => e.id );
    const futurIds = nextprops.children.map(e => e.id);

    if( currentIds.length !== futurIds.length ) return this.setState({filterValue: ''});

    for (let i = 0; i < futurIds.length; i++) {
      if( currentIds[i] !== futurIds[i] ) return this.setState({filterValue: ''});
    }
    
  }

  onfilterChange(event){
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

  filterDropDown(ref){
    this.setState({filterDropDown: !this.state.filterDropDown});
    this.refs[ref].focus();
  }

  handleSubClick( ref ){
    this.refs[ref].blur();
    this.setState({
      filterDropDown: false,
      filterValue: "ECHO Rules only"
    });
  }

  selectAll( ref ){
    this.refs[ref].select();
  }

  render(){
    const { headers, childConstructor, itemCountTitle, filterPlaceholder, isLoading, label } = this.props;
    const filteredChildren = this.filterChildren(),
      ref = JSON.stringify(headers),
      labelIs = typeof label,
      _label = label ? ( labelIs === 'function' ? label( filteredChildren, filteredChildren.length, this.props.children.length) : label ) : 
        (this.state.filterValue === '' ? filteredChildren.length + ' ' + itemCountTitle : filteredChildren.length + ' Of '+ this.props.children.length + ' ' + itemCountTitle ),
      children = filteredChildren.length !== 0 
        ? filteredChildren.map( (val, i) => childConstructor(val, i) ) 
        : <tr><td colSpan={headers.length}>{this.props.onEmpty}</td></tr>;
    return (<div className={createClassName(CLASSES.verticalArray, COMMON_CLASSES.flexCol)}>
      <div className={createClassName(CLASSES.headerContainer, COMMON_CLASSES.flexRow)}>
        <div className={CLASSES.itemCounter}>{_label}</div>
        <div className={CLASSES.internalFilter}>
          <input ref={ref} value={this.state.filterValue} placeholder={filterPlaceholder} onChange={this.onfilterChange} onClick={ () => this.selectAll(ref)}/>
          <span className={CLASSES.filter} onClick={() => this.filterDropDown(ref)}></span>
          {this.state.filterDropDown ? <span className={CLASSES.prefilter} onClick={() => this.handleSubClick(ref) }>ECHO Rules only</span> : undefined}
        </div>
      </div>
      <div className={createClassName(CLASSES.tableContainer, COMMON_CLASSES.flexCol)}>
        <table>
          <thead>
            <tr>{headers.map((h, i) => <th key={i} className={h.className}>{h.name}</th>)}</tr>
          </thead>
          <tbody className={createClassName(CLASSES.tbody ,COMMON_CLASSES.overflowY)}>
            { isLoading === false ? children : <tr><td colSpan={headers.length}><LoadingSpinner/></td></tr> }
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
  isLoading: PropTypes.bool.isRequired,
  childConstructor: PropTypes.func.isRequired,
  compare: PropTypes.func.isRequired
};

export default VerticalArray;