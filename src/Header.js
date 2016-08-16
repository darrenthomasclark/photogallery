import React, { Component } from 'react'

class Header extends Component {

  render () {
    return (
      <div className='headercontainer'>
        <div className='leftheader'>
          <div className='hamburger'>
            <img src='https://i.imgsafe.org/08300c52b6.png' alt='options' width='25px' height='25px' />
          </div>
          <div className='headerlogo'>
            <img src='https://i.imgsafe.org/08301d0d6c.png' width='307px' height='55px' padding-left='20px' alt='logo' />
          </div>
        </div>
        <div className='navigation'>
          <h2><a href='#'>About</a> <a href='#'>Photos</a> <a href='#'>Contact Us</a></h2>
        </div>
      </div>
    )
  }
}

export default Header
