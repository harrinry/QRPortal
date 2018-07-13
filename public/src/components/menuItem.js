import React from 'react';
import { createClassName } from '../common/lib';
import Axios from 'axios';
import '../style/menuItem.css';

class MenuItem extends React.PureComponent{
  render(){
    return (<div className={createClassName('menuItem', (this.props.selected ? 'selected' : undefined))} onClick={() => {
      const restUrl = '/rest?q='+this.props.href;
      Axios.get( restUrl )
        .then( res => this.props.onclick( this.props._ref, this.props.href, this.props.title, res.data))
        .catch( err => console.log(err));
    }}>
      <span className={'menuItem-title'}>{this.props.title}</span>
    </div>);
  }
}

export default MenuItem;