import React from 'react';
import { ListHeader } from '../index';

export default class StandardList extends React.PureComponent{
  render(){
    let k = 0;
    return (
      <div className={buildClassList(this.props)} >
        <table>
          <tbody>
            <tr>
              {this.props.headers.map( header => <ListHeader key={header + k++}>{header}</ListHeader>)}
            </tr>
            {this.props.children}
          </tbody>
        </table>
      </div>
    );
  }
}

const buildClassList = ( props ) => {
  if(!props) return;
  const { l50, l33 } = props;
  const left50 = 'L50-margins', left33 = 'L33-margins', sp = ' ';
  let localClassName = ['ruleList-container', 'table-container', 'scrollbar-small'];

  return ( l50 ? 
    localClassName
      .concat(left50)
      .join(sp) 
    : ( l33 ? 
      localClassName
        .concat(left33)
        .join(sp) : 
      localClassName.join(sp)
    ));
};