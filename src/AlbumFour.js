import React, { Component } from 'react'
import './Album.css'


class AlbumFour extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div className="albumFour">
      <div className='albumcontainer'>
        <div className='albumheader'>
          <h1>Machinery</h1>
          <h4>Click to view full-sized photo or <a href="..">go back</a>.</h4>
        </div>
        <div>
        <img src="https://i.imgsafe.org/0b7fe03a96.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0b7fe0a553.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0b7fcd50dd.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0b7fb93192.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0b7fb3b4b5.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0b7faf3e04.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bcb729ca7.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bcb719439.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bcb71187c.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bcb61c25d.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bcb533005.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/2bcb562f5d.jpg" onClick={this.handleClick} alt="" />
      </div>
      </div>
      </div>
    )
  }
}

export default AlbumFour
