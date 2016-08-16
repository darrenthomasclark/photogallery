import React, { Component } from 'react'

class Footer extends Component {

  render () {
    return (
      <div className='footer'>
        <div className='footerleft'>
          <div className='albumtitle'>Transportation with Wheels</div>
          <img src='https://i.imgsafe.org/0830025f47.png' width='47px' height='30px' alt='logo' />
        </div>
        <div className='footerright'><p>©2016 Iron Yard. All Rights Reserved.</p></div>
      </div>
    )
  }
}

export default Footer
