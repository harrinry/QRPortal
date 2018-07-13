import React from 'react';
import MenuItem from './menuItem';
import { createClassName } from '../common/lib';
import '../style/navItem.css';
import Axios from 'axios';

export default class NavItem extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {
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

  render() {
    return (
      <div className={createClassName('NavItem', 'flxc', (this.props.open ? 'Open' : undefined))} onClick={() => this.props.onMenuOpen(this.props.index)}>
        <div className={'flxr jsb minh50p'} ref={'nv_' + this.props.name}>
          <div className={'Name'}>{this.props.name}</div>
          <div className={'DropDown'} ref={'nv_'+this.props.name+'ddIcon'}></div>
        </div>
        <div className={'dropdown-container ovfy flxc'}>{this.state.children.map( ( c, idx ) => <MenuItem key={idx} _ref={{name: this.props.name, index: idx}} title={c.name} href={c.href} selected={this.props.selected.name === this.props.name && this.props.selected.index === idx} onclick={this.props.onItemClick}/>)}</div>
      </div>
    );
  }
}