import React, { Component } from 'react'
import './Album.css'

class AlbumOne extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div className="albumOne">
      <div className='albumcontainer'>
        <div className='albumheader'>
          <h1>Sport Utility Vehicles</h1>
          <h4>Click to view full-sized photo or <a href="..">go back</a>.</h4>
        </div>
        <div>
          <img src="https://i.imgsafe.org/0a43fcd6ce.jpg" onClick={this.handleClick} alt="" />
          <img src="https://i.imgsafe.org/0a43f7f152.jpg" onClick={this.handleClick} alt="" />
          <img src="https://i.imgsafe.org/0a43e8229b.jpg" onClick={this.handleClick} alt="" />
          <img src="https://i.imgsafe.org/0a43da366a.jpg" onClick={this.handleClick} alt="" />
          <img src="https://i.imgsafe.org/0a43d3ab28.jpg" onClick={this.handleClick} alt="" />
          <img src="https://i.imgsafe.org/0a43cd0f3a.jpg" onClick={this.handleClick} alt="" />
          <img src="https://i.imgsafe.org/2aafb05292.jpg" onClick={this.handleClick} alt="" />
          <img src="https://i.imgsafe.org/2aafa599ee.jpg" onClick={this.handleClick} alt="" />
          <img src="https://i.imgsafe.org/2aaf88b267.jpg" onClick={this.handleClick} alt="" />
          <img src="https://i.imgsafe.org/2aaf7b2031.jpg" onClick={this.handleClick} alt="" />
          <img src="https://i.imgsafe.org/2aaf74d8f8.jpg" onClick={this.handleClick} alt="" />
          <img src="https://i.imgsafe.org/2aaf6d005c.jpg" onClick={this.handleClick} alt="" />
        </div>
      </div>
      </div>
    )
  }
}

export default AlbumOne
