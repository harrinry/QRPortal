import React from 'react';
import { COMMON_CLASSES, createClassName } from 'common/';
import NAV from 'nav/';
import ContentBody from 'body/';
import Footer from 'app-footer/';
//import fileDownload from 'js-file-download';

class App extends React.PureComponent{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.addEventListener('popstate', this.props.handleBack);
  }

  componentWillUnmount(){
    window.removeEventListener('popstate', this.props.handleBack);
  }

  // downloadQualityCube(){
  //   fetch('download/csv/quality-cube', {
  //     method: 'POST',
  //     headers: {
  //       'accept': 'text/csv',
  //     },
  //     mode: 'same-origin'
  //   })
  //     .then(res => res.blob())
  //     .then(blob => fileDownload(blob, 'quality-cube.csv', 'text/csv'))
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render(){
    return (
      <div className={createClassName(COMMON_CLASSES.flexCol, COMMON_CLASSES.vh100)}>
        <NAV/>
        <ContentBody/>
        <Footer/>
      </div>
    );
  }
}

export default App;
