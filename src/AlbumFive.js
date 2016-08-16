import React, { Component } from 'react'
import './Album.css'


class AlbumFive extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div className="albumFive">
      <div className='albumcontainer'>
        <div className='albumheader'>
          <h1>Hoverboards</h1>
          <h4>Click to view full-sized photo or <a href="..">go back</a>.</h4>
        </div>
        <div>
        <img src="https://i.imgsafe.org/1c16335e79.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/1c1615c68c.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/1c16086868.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/1c16324cb2.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/1c15fcf77b.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/1c15f5c848.jpg" onClick={this.handleClick} alt="" />
      </div>
      </div>
      </div>
    )
  }
}

export default AlbumFive
