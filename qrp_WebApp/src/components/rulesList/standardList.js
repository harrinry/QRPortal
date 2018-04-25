import React from 'react';

const localClassName = ['ruleList-container', 'table-container', 'L50-margins', 'scrollbar-small'],
  sp = ' ';

export default class StandardList extends React.PureComponent{
  render(){
    return (
      <div className={localClassName.join( sp )} >
        <table>
          <tbody>
            <tr>
              <th>ID</th><th>Name</th><th>Critical?</th>
            </tr>
            {this.props.children}
          </tbody>
        </table>
      </div>
    );
  }
  
}