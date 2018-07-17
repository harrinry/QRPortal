import React from 'react';
import { createClassName } from '../common/lib';
import '../style/contentBody.css';

export default class ContentBody extends React.PureComponent{
  render(){
    return (
      <div className={createClassName('contentBody', 'flxc', 'std-bgc', 'vh100', 'flxShnk1')}>
        {this.props.children}
      </div>
    );
  }
}