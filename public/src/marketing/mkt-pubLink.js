import React from 'react';

export default class MKT_Block_linker extends React.PureComponent{

  shouldComponentUpdate(){
    console.log('trying to update');
    return true;
  }

  componentDidMount(){
    window.hbspt.cta.load(10154, this.props.id, {});
  }

  render(){
    return (
      <span class='hs-cta-wrapper' id={'hs-cta-wrapper-' + this.props.id}>
        <span class={'hs-cta-node hs-cta-'+ this.props.id} id={'hs-cta-'+ this.props.id}>
          <div id='hs-cta-ie-element'></div>
          <a href={this.props.href} >
            <img class='hs-cta-img' 
              id={'hs-cta-img-' + this.props.id}
              src={`https://no-cache.hubspot.com/cta/default/10154/${this.props.id}.png`} alt={this.props.alt}/>
          </a>
        </span>
      </span>
    );
  }
}