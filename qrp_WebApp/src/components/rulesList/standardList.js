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
  const { l50, l20, l30 } = props;
  const left50 = 'L50-margins', left20 = 'L20-margins', left30 = 'L30-margins', sp = ' ';
  let localClassName = ['ruleList-container', 'table-container', 'scrollbar-small'];

  let thevalue = localClassName.join(sp);

  if(l50)
  {
    thevalue = localClassName.concat(left50).join(sp);
  }
  else if(l30)
  {
    thevalue = localClassName.concat(left30).join(sp);
  }
  else if(l20)
  {
    thevalue = localClassName.concat(left20).join(sp);
  }

  return (thevalue);
};
