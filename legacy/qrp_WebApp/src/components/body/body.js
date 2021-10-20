import React from 'react';
import { Technologies, Standards, Rules, Sources, Radio, LOADRULESLIST, RETURNTOSTART } from '../index';

export default class Body extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      staticUI_cls: 'static-UI'
    };

    Radio.listen(LOADRULESLIST, ()=>this.setState({staticUI_cls: 'static-UI hidden'}));
    Radio.listen(RETURNTOSTART, ()=>this.setState({staticUI_cls: 'static-UI'}));
  }
  render(){
    return (
      <div className='body'>
        <div className={this.state.staticUI_cls}>
          <p className="WelcomeTitle">Welcome to the CAST Structural Rules Portal, let&#39;s start browsing or searching the rules<span>BETA</span></p>
          <Standards />
          <Technologies />
          <Sources />
        </div>
        <div className='rules'>
          <Rules/>
        </div>
      </div>
    );
  }
}
