import React from 'react';

import axios from 'axios';

class GifCard extends React.Component{
  constructor(props) {
    super(props);

    this.deleteCard = this.deleteCard.bind(this);
  }

// Delete Journal Card
deleteCard(){
  axios.delete(`http://localhost:3005/api/logs/`, {data: {id: this.props.id}})
  .catch((err)=>{console.log(err)});
  }

  render() {

    const props = this.props;

    return <div className='uk-card uk-card-default uk-card-body uk-card-hover uk-width-expand'>
      <div className='uk-card-header'>
        <h2 className='uk-card-title'>{props.mood}</h2>
        <div className='uk-card-badge uk-label badge-happy'>Happy</div>
      </div>
      <h1 className='gifCard-Gif'>{props.gif}</h1>
      <h3 className='gifCard-Blurb'>{props.comment}</h3>
      <button onClick={this.deleteCard}>Delete</button>
    </div>
  }
}

export default GifCard