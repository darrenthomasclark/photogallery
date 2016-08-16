import React, { Component } from 'react'

class Image extends Component {

  clickHandler = () => {
    this.props.onNavigate('album', this.props.title)
  }

  render() {
    return (
      <div className="image">
        <img src={this.props.url} alt={this.props.title} />
        <p className="return" onClick={this.clickHandler}>Return to Album</p>
      </div>
    )
  }
}

export default Image
