import React, { Component } from 'react'
import './Album.css'

class AlbumSix extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div className="albumSix">
      <div className='albumcontainer'>
        <div className='albumheader'>
          <h1>Skateboards</h1>
          <h4>Click to view full-sized photo or <a href="..">go back</a>.</h4>
        </div>
        <div>
        <img src="https://i.imgsafe.org/0ad80d34e6.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ad8255e0e.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ad834bc8f.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ad841fe2f.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ad856618e.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ad861e7ca.jpg" onClick={this.handleClick} alt="" />
      </div>
      </div>
      </div>
    )
  }
}

export default AlbumSix
