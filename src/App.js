import React, { Component } from 'react';
import './App.css';
import Albums from './Albums'
import AlbumOne from './AlbumOne'
import AlbumTwo from './AlbumTwo'
import AlbumThree from './AlbumThree'
import AlbumFive from './AlbumFive'
import AlbumSix from './AlbumSix'
import Image from './Image'

class App extends Component {

  constructor () {
    super()
    this.state = {
      currentAlbum: null,
      currentImage: null
    }
  }

  onNavigate = (type, where) => {
    if (type === 'album') {
      this.setState({
        currentAlbum: where,
        currentImage: null
      })
    } else {
      this.setState({
        currentImage: where
      })
    }
  }

  render() {
    let screen

    if (this.state.currentImage === null) {
      switch (this.state.currentAlbum) {
        case 'Sport Utility Vehicles':
          screen = <AlbumOne onNavigate={this.onNavigate} />
          break;
        case 'Unicycles':
          screen = <AlbumTwo onNavigate={this.onNavigate} />
          break;
        case 'Rollerskates':
          screen = <AlbumThree onNavigate={this.onNavigate} />
          break;
        case 'Machinery':
          screen = <AlbumFour onNavigate={this.onNavigate} />
          break;
        case 'Hoverboards':
          screen = <AlbumFive onNavigate={this.onNavigate} />
          break;
        case 'Skateboards':
          screen = <AlbumSix onNavigate={this.onNavigate} />
          break;
        default:
          screen = <Albums onNavigate={this.onNavigate} />
      }
    } else {
      screen = <Image url={this.state.currentImage}
      title={this.state.currentAlbum}
      onNavigate={this.onNavigate} />
    }



    return (
      <div className="App">
        <div className="App-header">
          <h1>Wheels Gallery</h1>
        </div>
        <div className="gallery">
          {screen}
        </div>

        <div className="App-footer">
        <h2>Code by Matt Schwartz. Borrowed by and hacked by Darren Clark.</h2>
        </div>
      </div>
    );
  }
}

export default App;
