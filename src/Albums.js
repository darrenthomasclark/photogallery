import React, { Component } from 'react'
import Album from './Album'

class Albums extends Component {

  render() {
    return (
      <div className="albums">
        <Album onNavigate={this.props.onNavigate} image="galleryone/suv1.jpg" title="Sport Utility Vehicles"/>
        <Album onNavigate={this.props.onNavigate} image="gallerytwo/unicycle1.jpg" title="Unicycles"/>
        <Album onNavigate={this.props.onNavigate} image="gallerythree/skates1.jpg" title="Rollerskates"/>
        <Album onNavigate={this.props.onNavigate} image="galleryfour/machine1.jpg" title="Machinery"/>
        <Album onNavigate={this.props.onNavigate} image="galleryfive/hoverboard2.jpg" title="Hoverboards"/>
        <Album onNavigate={this.props.onNavigate} image="gallerysix/skateboard1.jpg" title="Skateboards"/>
      </div>
    )
  }
}

export default Albums
