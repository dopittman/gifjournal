import React from 'react'
import Typed from 'typed.js'

class typing extends React.Component {

  componentDidMount(){
    let options = {
      strings: ["I am excited to go back to Disney World again!", "I am so mad they cancelled my favorite show :(", "I am sooooo ready for 5 o'clock to get here", "I am ready for Friday Night!!"],
      typeSpeed: 35,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
      loopCount: 'infinity'
    }

    this.typed = new Typed('.typing', options);
  }



  render(){
    return(
    <div className='typing-div'>
    <span></span>
  <span className='typing' /></div>
    )}
}

export default typing