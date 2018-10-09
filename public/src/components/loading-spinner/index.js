import React from 'react';
import { spinner } from './constants';
import { createClassName, COMMON_CLASSES } from 'common/';
import './style.css';

class LoadingSpinner extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      shouldDisplay: false,
      timer: undefined
    };
  }

  componentDidMount(){
    this.setState({
      shouldDisplay: false,
      timer: setTimeout(function() {
        return this.toggleDisplay();
      }.bind(this), 1000)
    });
  }

  componentWillUnmount(){
    clearTimeout(this.state.timer);
  }

  toggleDisplay(){
    return this.setState(_state => {
      return {
        shouldDisplay: !_state.shouldDisplay
      };
    });
  }
  render(){
    return this.state.shouldDisplay
      ? <div className={createClassName(spinner, COMMON_CLASSES.marginAuto)}></div>
      : <React.Fragment />;
  }
}

export default LoadingSpinner;