import React from 'react';
import GifCard from './GifCard'

class FormTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {json: []};

    this.getGifs = this.getGifs.bind(this);
    this.createCards = this.createCards.bind(this);
  }

  // Get moods from API
  getGifs(){
    fetch('http://localhost:3005/api/logs/')
      .then((response) => {
        return response})
        .then((res) => {return res.json()})
        .then((jsonres) => {
         const allCards = this.createCards(jsonres).map((card)=>{
            return card});
        this.setState({json: allCards})})
  }

  //Creates the logs/cards
  createCards(arr){
    const allGifs = arr.map((post, ind)=>{
      // return console.log(post)
       return <GifCard
        key = {ind}
        gif= {post.gif}
        mood = {post.mood}
        blurb = {post.blurb}
        />
    })
    return allGifs;
  }

  render() {
    return(
      <div>
    <button onClick={this.getGifs}>Get JSON</button>
    <div>{this.state.json.map((card, ind)=> <div key={ind}>{card}</div>)}</div>
    </div>
    )}
}
export default FormTest;