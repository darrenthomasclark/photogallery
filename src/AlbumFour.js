import React, { Component } from 'react'

class AlbumFour extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumFour">
        <img src="https://i.imgsafe.org/0b7fe03a96.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0b7fe0a553.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0b7fcd50dd.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0b7fb93192.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0b7fb3b4b5.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0b7faf3e04.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a Photo to Enlarge</p>
      </div>
    )
  }
}

export default AlbumFour
