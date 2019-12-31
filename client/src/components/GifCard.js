import React from 'react';

function GifCard (props) {
  return (
    <div className='uk-card-default uh-card-body'>
      <h1 className='gifCard-Gif'>{props.gif}</h1>
      <h2 className='uk-card-title'>{props.mood}</h2>
      <h3 className='gifCard-Blurb'>{props.blurb}</h3>
    </div>
  )
}

export default GifCard