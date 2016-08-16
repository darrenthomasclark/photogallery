import React, { Component } from 'react'
import "./Album.css"

class AlbumTwo extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div className="albumTwo">
      <div className='albumcontainer'>
        <div className='albumheader'>
          <h1>Unicycles</h1>
          <h4>Click to view full-sized photo or <a href="..">go back</a>.</h4>
        </div>
        <div>
        <img src="https://i.imgsafe.org/0a5e305431.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a5e2480e1.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a5e18f16a.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a5e135abd.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a5e069b53.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a5de7e503.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2b74947cfb.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2b7485f617.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2b747381c2.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2b746ef4ec.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2b746aab8a.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2b74580b04.jpg" onClick={this.handleClick} alt="" />
        </div>
      </div>
      </div>
    )
  }
}

export default AlbumTwo
