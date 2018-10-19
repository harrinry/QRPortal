import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from 'components/menu-submenu';
import MenuItem from 'components/menu-item';
import LoadingSpinner from 'components/loading-spinner';
import { COMMON_CLASSES, createClassName } from 'common/';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import { CLASSES, ITEMS } from './mn-constants';
import './style.css';
import { LANDING_PAGE } from '../body/body-constants';

class NavigationMenu extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      mq: 'aip/web-navigation',
      Menus: [],
      loading: true,
      selected: undefined
    };

  }
  
  componentDidMount(){
    fetch(this.state.mq)
      .then(res => res.json())
      .then(
        data => this.setState( _state => {
          return {
            mq: _state.mq,
            Menus: data,
            loading: false
          };
        }),
        () => this.setState( _state => {
          return {
            mq: _state.mq,
            Menus: [],
            loading: false
          };
        })
      );
  }

  setLoading( href ){
    this.state.Menus.map( menu => {
      return menu.href === href 
        ? {
          ...menu,
          loading: true
        }
        : {
          ...menu,
          loading: false,
          children: menu.children ? 
            menu.children.map( c => {
              return c.href === href 
                ? {
                  ...c,
                  loading: true
                } 
                : c;
            }) 
            : []
        };
    });
  }

  getMenuData(href){
    this.setLoading(href);
    fetch(href)
      .then(res => res.json())
      .then(
        data => this.setState( _state => {
          return {
            ..._state,
            Menus: _state.Menus.map( menu => {
              return menu.href === href
                ? {
                  ...menu,
                  children: data,
                  loading: false
                }
                : {
                  ...menu,
                  children: menu.children ? 
                    menu.children.map( c => {
                      return c.href === href 
                        ? {
                          ...c,
                          children: data,
                          loading: false
                        } 
                        : c;
                    }) 
                    : []
                };
            })
          };
        }),
        err => console.log(err));
  }

  shouldGetData( state ){
    return state ? true : false;
  }

  conditionalPopulate(state, href){
    return this.shouldGetData(state) ? this.getMenuData(href) : state;
  }

  isLoading( loading ){
    return loading ? <LoadingSpinner/> : undefined;
  }

  setSelected( obj ){
    this.setState(_state => {
      return {
        ..._state,
        Menus: _state.Menus,
        selected: JSON.stringify(obj)
      };
    });
  }

  subMenuOrItems( parent, data, key, onClickCB ){
    const isSubMenu = parent.name === ITEMS.STANDARDS || parent.name === ITEMS.EXTENSIONS ? true : false;
    
    return isSubMenu 
      ? <SubMenu 
        key={key}
        title={data.name} 
        cssClass={parent.name === ITEMS.STANDARDS ? createClassName(COMMON_CLASSES.fontWeight400, CLASSES.standardsSubMenu) : undefined}
        href={data.href}
        icon={data.icon}
        onClick={this.conditionalPopulate( data.children, data.href )}>{
          data.children 
            ? data.children.map( (c, i) => this.subMenuOrItems( data, c, i, onClickCB ))
            : this.isLoading(data.loading)}
      </SubMenu>
      : <MenuItem key={key}
        selected={this.state.selected === JSON.stringify(data)}
        icon={data.icon}
        title={data.name}
        href={data.href}
        onClick={() => {
          this.setSelected(data);
          onClickCB(data);
        }}>
      </MenuItem>;
  }

  render(){
    const props = this.props,
      navView = props.view,
      contentOrNav = navView !== LANDING_PAGE ? true : false;
    return (
      <div className={
        createClassName(
          CLASSES.menu, 
          props.viewType === VIEW_TYPES.TILES_VIEW 
            ? COMMON_CLASSES.hidden 
            : undefined ,
          contentOrNav
            ? CLASSES.br
            : COMMON_CLASSES.fixed )}>
        {/* { this.state.loading 
          ? <LoadingSpinner/>
          : this.state.Menus.map( (menu, i) => <SubMenu
            key={i} 
            title={menu.name} 
            onClick={() => this.conditionalPopulate(menu.children, menu.href)} 
            cssClass={ menu.name === ITEMS.STANDARDS 
              ? createClassName(COMMON_CLASSES.fontWeight400, CLASSES.standardsSubMenu)
              : undefined}>
            {menu.children.map( (item, i)=> this.subMenuOrItems( menu, item, i,  ))}
          </SubMenu>) } */}
        <SubMenu title={ITEMS.STANDARDS}>
          <SubMenu title={ITEMS.BUSINESSCRITERIA} onClick={props.populateStd_bc} cssClass={createClassName(COMMON_CLASSES.fontWeight400, CLASSES.standardsSubMenu)}>
            {props.std_bc.data ?
              props.std_bc.data.map( (e, i) => <MenuItem key={i} icon={e.icon} selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
                props.setSelected(JSON.stringify(e));
                props.onBusinessCriteriaClick(e);
              }}/>) : ( props.std_bc.loading ? <LoadingSpinner/> : undefined )}
          </SubMenu>
          <SubMenu title={ITEMS.CISQ} onClick={props.populateStd_cisq} cssClass={createClassName(COMMON_CLASSES.fontWeight400, CLASSES.standardsSubMenu)}>
            {props.std_cisq.data ?
              props.std_cisq.data.map( (e, i) => <MenuItem key={i} selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
                props.setSelected(JSON.stringify(e));
                props.onCisqClick(e);
              }}/>) : ( props.std_cisq.loading ? <LoadingSpinner/> : undefined )}
          </SubMenu>
          <SubMenu title={ITEMS.CWE} onClick={props.populateStd_cwe} cssClass={createClassName(COMMON_CLASSES.fontWeight400, CLASSES.standardsSubMenu)}>
            {props.std_cwe.data ?
              props.std_cwe.data.map( (e, i) => <MenuItem key={i} selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
                props.setSelected(JSON.stringify(e));
                props.onCweClick(e);
              }}/>) : ( props.std_cwe.loading ? <LoadingSpinner/> : undefined )}
          </SubMenu>
          <SubMenu title={ITEMS.OWASP} onClick={props.populateStd_owasp} cssClass={createClassName(COMMON_CLASSES.fontWeight400, CLASSES.standardsSubMenu)}>
            {props.std_owasp.data ?
              props.std_owasp.data.map( (e, i) => <MenuItem key={i} selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
                props.setSelected(JSON.stringify(e));
                props.onOwaspClick(e);
              }}/>) : ( props.std_owasp.loading ? <LoadingSpinner/> : undefined )}
          </SubMenu>
        </SubMenu>
        <SubMenu title={ITEMS.TECHNOLOGIES} onClick={props.populateTechnologies}>
          {props.technologies.data ?
            props.technologies.data.map( (e, i) => <MenuItem key={i} selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
              props.setSelected(JSON.stringify(e));
              props.onTechnologyClick(e);
            }}/>) : ( props.technologies.loading ? <LoadingSpinner/> : undefined )}
        </SubMenu>
        <SubMenu title={ITEMS.EXTENSIONS} onClick={props.populateExtensions}>
          {props.extensions.loading ?
            <LoadingSpinner/> : 
            props.extensions.data.map( (e, i) => (
              <MenuItem 
                key={i} 
                title={e.name}
                href={e.href}
                selected={props.selected === JSON.stringify(e) ? true : false}
                onClick={() => {
                  props.setSelected(JSON.stringify(e));
                  props.onExtensionsClick(e);
                }} />))}
        </SubMenu>
      </div>
    );
  }
}



NavigationMenu.propTypes = {
  viewType: PropTypes.string.isRequired,
  onExtensionsClick: PropTypes.func.isRequired,
  onElementClick: PropTypes.func.isRequired,
  onQualityStandardClick: PropTypes.func.isRequired,
};

export default NavigationMenu;
