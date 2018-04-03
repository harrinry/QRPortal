import React from 'react';
//import ReactDOM from 'react-dom';

export default class SlidedownMenu extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      className: 'slidedown-menu background-blue'
    };
  }

  componentWillReceiveProps( props ){
    if ( props.visible ){
      this.setState({ className: 'slidedown-menu background-blue visible'});
    } else {
      this.setState({ className: 'slidedown-menu background-blue'});
    }
  }

  render(){
    return (<div className={this.state.className}>
      {this.props.value}
    </div>);
  }
}