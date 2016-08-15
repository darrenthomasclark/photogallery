import React, { Component } from 'react'

class AlbumThree extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumThree">
        <img src="https://i.imgsafe.org/0ab0f2365d.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ab0e9bba1.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ab0e0d143.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ab0d874a4.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ab0cbb233.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ab0cf0048.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a Photo to Enlarge</p>
      </div>
    )
  }
}

export default AlbumThree
