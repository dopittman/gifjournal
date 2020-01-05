// Move all functions to their own component

import React from 'react';
import GifCard from './GifCard';
const axios = require('axios');

class FormTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {json: []};

    this.getGifs = this.getGifs.bind(this);
    this.displayCards = this.displayCards.bind(this);
    this.createCard = this.createCard.bind(this);
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
      })
  }

  // Get moods from API
  getGifs(){
    axios.get(`http://localhost:3005/api/logs/`)
      .then((response) => {
        return response})
        .then((res) => {return res.data})
        .then((jsonres) => {
         const allCards = this.displayCards(jsonres).map((card)=>{
            return card});
        this.setState({json: allCards})})
        .catch((err)=>{console.log(err)})
  }

  //Displays the logs/cards
  displayCards(arr){
    const allGifs = arr.map((post, ind)=>{
       return <GifCard
        key = {ind}
        gif= {post.gif}
        mood = {post.mood}
        blurb = {post.blurb}
        />
    })
    return allGifs;
  }

  createCard(mood, gif, blurb){
    axios.post(`http://localhost:3005/api/logs`, {
    mood,
    gif,
    blurb
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <div className='uk-container'>
    <button onClick={this.getGifs}>Get Cards</button>
    <button onClick={()=>{this.createCard('1 mood','2 gif','3 blurb')}}>Create Static Card</button>
      <div className='uk-grid-medium uk-child-width-1-2@m uk-grid-match uk-grid' uk-grid='true'>
        {this.state.json.map((card, ind)=> <div key={ind}>{card}</div>)}
      </div>
    </div>
    )}
}
export default FormTest;