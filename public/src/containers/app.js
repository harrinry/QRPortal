import React from 'react';
import NavBar from './NavBar';
import { createClassName } from '../common/lib';
import ContentBody from '../components/contentBody';
import VerticalArray from '../components/verticalArray';

export default class App extends React.PureComponent{
  render(){
    return (
      <div className={createClassName( 'flxr', 'txtcenter' )}>
        <NavBar />
        <ContentBody>
          <VerticalArray headers={['ID', 'Name', 'Critical']} values={['id','name', 'critical']}>
            {[
              {
                id: -3,
                name: 'C/C++',
                critical: false
              },
              {
                id: -3,
                name: 'C/C++',
                critical: false
              },
              {
                id: -3,
                name: 'C/C++',
                critical: false
              },
              {
                id: -3,
                name: 'C/C++',
                critical: true
              },
              {
                id: -3,
                name: 'C/C++',
                critical: false
              },
            ]}
          </VerticalArray>
        </ContentBody>
      </div>
    );
  }
}