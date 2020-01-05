import React from 'react';

function GifCard (props) {
  return (
    <div className='uk-card uk-card-default uk-card-body uk-card-hover uk-width-expand'>
      <div className='uk-card-header'>
        <h2 className='uk-card-title'>{props.mood}</h2>
        <div className='uk-card-badge uk-label badge-happy'>Happy</div>
      </div>
      <h1 className='gifCard-Gif'>{props.gif}</h1>
      <h3 className='gifCard-Blurb'>{props.blurb}</h3>
    </div>
  )
}

export default GifCard