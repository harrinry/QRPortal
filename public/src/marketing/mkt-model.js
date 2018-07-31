import React from 'react';
import MKT_Wrapper from './mkt-pubLink';
import { fetchNuggets } from './mkt-resources';

export default class MktContent extends React.PureComponent{
  constructor( props ){
    super(props);

    this.state = {};

  }

  componentDidUpdate(prevProps){
    if (this.props.techno !== prevProps.techno) {
      fetchNuggets( this.props.techno )
        .catch( () => console.log('An error occured while loading nuggets'))
        .then( data => this.setState({content: data}) );
    }
  }

  componentDidMount(){
    if (this.props.techno) {
      fetchNuggets( this.props.techno )
        .catch( () => console.log('An error occured while loading nuggets'))
        .then( data => this.setState({content: data}) );
    }
  }

  render(){
    return (
      <div className={'marketing-content'}>
        { (this.state.content && Array.isArray(this.state.content)) ? this.state.content.map( (e, i) => <MKT_Wrapper key={i} id={e.id} alt={e.alt} href={e.href}/> ) : undefined }
      </div>
    );
  }
}