import React from 'react';
import MenuItem from '../menuItem/menuItem';
import { createClassName } from '../../common/lib';
import './style.css';
import Axios from 'axios';

export default class NavItem extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      children: []
    };

    if ( this.props.href ){
      Axios.get(this.props.href)
        .then( res => res.data )
        .then( data => this.setState( _state => {
          return {
            isOpen: _state.isOpen,
            children: data
          };
        }))
        .catch( e => console.log(e));
    }

  }

  onExpand(){
    this.setState( (preState) => {
      return {
        isOpen: preState.isOpen ? false : true
      };
    });
  }

  render() {
    return (
      <div className={createClassName('NavItem', (this.state.isOpen ? 'Open' : undefined))} onClick={this.onExpand.bind(this)}>
        <div className={'flex-row'}>
          <div className={'Name'}>{this.props.name}</div>
          <div className={'DropDown'}></div>
        </div>
        <div className={'dropdown-container'}>{this.state.children.map( ( c, idx ) => <MenuItem key={idx} _ref={{name: this.props.name, index: idx}} title={c.name} href={c.href} selected={this.props.selected.name === this.props.name && this.props.selected.index === idx} onclick={this.props.onItemClick}/>)}</div>
      </div>
    );
  }
}