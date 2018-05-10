import React from 'react';
import { Radio, LOADRULESLIST, HIDEOVERLAY } from '../index';
const cn = 'dropOnhoverLarge';

export default class SearchResultElement extends React.Component{

  render(){
    const technos = this.props.technologies;
    let i = 0;
    return ( <div className={this.props.className} id={this.props.id}>
      <p>{this.props.id} : {this.props.title}</p>
      <p className={ this.props.slideDown ? cn : undefined}>{this.props.value}</p>
      { technos ? technos.map( t => <span key={t.id + i++} onMouseDown={this.dispatchAction.bind(this, t.href, t.name)}>{t.name}</span>) : undefined }
    </div>);
  }

  dispatchAction( href, name ){
    Radio.emit( LOADRULESLIST, href, name);
    Radio.emit( HIDEOVERLAY );
  }
}
