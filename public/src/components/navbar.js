import React from 'react';
import NavItem from './navitem';
import { createClassName } from '../common/lib';
import '../style/navBar.css';

class NavBar extends React.PureComponent {
  render() {
    const open = this.props.isOpen ? 'Open' : 'Closed';
    return (
      <div className={createClassName('LeftBar', 'flxc', open)}>
        <div className='Top flxr'>
          <img src={'img/LogoStructuralRules.svg'} className='Logo' alt='logo' /><p className={createClassName('Title',open)}>Structural Rules</p>
        </div>
        <div className='flxc nav'>
          {this.props.children.map( (section, index) => <NavItem key={index} open={section.open} onMenuOpen={this.props.onMenuOpen} index={index} selected={this.props.selected} href={section.href} name={section.name} onItemClick={this.props.onItemClick}>{section.children}</NavItem>)}
        </div>
        <div className='Bottom' onClick={this.props.onClick}>
          <img src={'img/ArrowSideBar.svg'} className={createClassName('ArrowSideBar', open)} alt='Collapse/Extend'/>
        </div>
      </div>
    );
  }
}

export default NavBar;
