import React, { Component } from 'react'

class AlbumOne extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumOne">
        <img src="https://i.imgsafe.org/0a43fcd6ce.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a43f7f152.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a43e8229b.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a43da366a.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a43d3ab28.jpg" onClick={this.handleClick} alt="" />
        <img src="https://i.imgsafe.org/0a43cd0f3a.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a photo to enlarge</p>
      </div>
    )
  }
}

export default AlbumOne
