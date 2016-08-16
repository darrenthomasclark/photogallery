import React, { Component } from 'react'
import './Album.css'

class AlbumThree extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div className="albumThree">
      <div className='albumcontainer'>
        <div className='albumheader'>
          <h1>Rollerskates</h1>
          <h4>Click to view full-sized photo or <a href="..">go back</a>.</h4>
        </div>
        <div>
        <img src="https://i.imgsafe.org/0ab0f2365d.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ab0e9bba1.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ab0e0d143.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ab0d874a4.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ab0cbb233.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ab0cf0048.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bb1ca0116.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bb1d5f517.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bb1d7f13d.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bb1dbfbad.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bb21de9de.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bb223eee8.jpg" onClick={this.handleClick} alt="" />
        </div>
      </div>
      </div>
    )
  }
}

export default AlbumThree
