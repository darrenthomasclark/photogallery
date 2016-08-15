import React, { Component } from 'react'

class AlbumFive extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumFive">
        <img src="https://i.imgsafe.org/1c16335e79.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/1c1615c68c.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/1c16086868.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/1c16324cb2.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/1c15fcf77b.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/1c15f5c848.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a Photo to Enlarge</p>
      </div>
    )
  }
}

export default AlbumFive
