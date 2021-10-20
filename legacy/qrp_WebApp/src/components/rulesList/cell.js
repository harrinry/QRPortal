import React from 'react';

const cellClass = 'table-cell', criticalClass = 'critical-cell';

export default class TableCell extends React.PureComponent{
  render(){
    return (
      <td className={cellClass}>
        <span className={this.props.critical ? criticalClass : undefined}>
          {this.props.critical ? ' ' : this.props.children}
        </span>
      </td>
    );
  }
}