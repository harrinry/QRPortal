import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES, SEARCHFOR, Ref} from './nv-constants';
import { createClassName } from 'common/';
import { PathElement } from 'components/';
import { DropdownCompare } from 'components/';
import './style.css';

class NavHeader extends React.PureComponent{
  render(){
    const props = this.props,
      pl = props.path ? props.path.length : undefined;
    return (
      <div ref={Ref} className={createClassName(CLASSES.headerMain)}>
        <div className={CLASSES.pathContainer}>
          { props.searchVisible
            ? <PathElement 
              rules={props.rules} 
              cmpSelected={props.cmpSelected} 
              isComparing={props.compareEnabled} 
              showIcon={false} path={props.path} 
              separator={false} 
              index={0} 
              name={SEARCHFOR + props.searchQuery} 
              closeBtn={true} 
              onCloseBtnClick={props.closeSearchResults}/>
            : props.path.map((e, index, arr) => {
              if ( Array.isArray(e) ) {
                return <DropdownCompare 
                  key={index} 
                  list={e} 
                  params={[props.cmpParams.vi, props.cmpParams.vtc]} 
                  disableState={true} 
                  compareEnabled={props.compareEnabled}
                  onItemSelect={props.selectorChange} 
                  toggleCompare={props.onToggleCompare} 
                  onCompare={(v1, v2) => props.onCompare(arr[1].id, v1, v2)}/> ;
              } else return (
                <PathElement 
                  key={index} 
                  id={e.id} 
                  viewType={props.viewType}
                  ext={props.path[props.path.length - 1]} 
                  params={props.cmpParams} 
                  compareEnabled={props.compareEnabled} 
                  isExtension={/com.castsoftware./ig.test(e.id)} 
                  separator={index !== pl - 1 && index !== 0} 
                  showIcon={e.icon !== undefined} index={index} 
                  gotoLocation={props.gotoLocation} 
                  name={e.label || e.name} 
                  href={e.href} 
                  icon={e.icon}/>);
            })}
        </div>
      </div>
    );
  }
}

NavHeader.propTypes = {
  path: PropTypes.arrayOf(PropTypes.any),
  searchVisible: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string,
  cmpParams: PropTypes.object.isRequired,
  compareEnabled: PropTypes.bool.isRequired,
  cmpSelected: PropTypes.any,
  viewType: PropTypes.string.isRequired
};

export default NavHeader;
