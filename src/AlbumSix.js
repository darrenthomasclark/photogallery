import React, { Component } from 'react'

class AlbumSix extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumSix">
        <img src="https://i.imgsafe.org/0ad80d34e6.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ad8255e0e.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ad834bc8f.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ad841fe2f.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ad856618e.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0ad861e7ca.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a Photo to Enlarge</p>
      </div>
    )
  }
}

export default AlbumSix
