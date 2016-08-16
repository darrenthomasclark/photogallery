import React, { Component } from 'react';
import './App.css';
import './Header.css';
import './Footer.css';
import Albums from './Albums'
import AlbumOne from './AlbumOne'
import AlbumTwo from './AlbumTwo'
import AlbumThree from './AlbumThree'
import AlbumFour from './AlbumFour'
import AlbumFive from './AlbumFive'
import AlbumSix from './AlbumSix'
import Image from './Image'
import Header from './Header'
import Footer from './Footer'

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
        <Header />
        <div className="gallerycontainer">
          <div className="gallery">
            {screen}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
