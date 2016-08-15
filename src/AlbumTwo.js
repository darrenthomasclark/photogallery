import React, { Component } from 'react'

class AlbumTwo extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumTwo">
        <img src="https://i.imgsafe.org/0a5e305431.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a5e2480e1.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a5e18f16a.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a5e135abd.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a5e069b53.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a5de7e503.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a Photo to Enlarge</p>
      </div>
    )
  }
}

export default AlbumTwo
