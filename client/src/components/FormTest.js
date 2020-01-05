// Move all functions to their own component

import React from 'react';
import GifCard from './GifCard';
const axios = require('axios');

class FormTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      json: [],
      mood: '',
      gif: '',
      comment: '',
    };

    this.getGifs = this.getGifs.bind(this);
    this.displayCards = this.displayCards.bind(this);
    this.createCard = this.createCard.bind(this);
    this.formChangeHandler = this.formChangeHandler.bind(this);
  }

  // Add automatic Card retrieval
  componentDidMount() {
  }

  // Get gif cards from API
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

  // Displays the logs/cards
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

  // Create new journal card
  createCard(){
    axios.post(`http://localhost:3005/api/logs`, {
    mood: this.state.mood,
    gif: this.state.gif,
    blurb: this.state.comment
    })
    .catch((err)=>{console.log(err)});
  }

  // Handle form data
  formChangeHandler= (e) => {
    this.setState({ [e.target.name]:e.target.value });
  }

  render() {
    return(
      <div className='uk-container'>
      <form>
        <div className='form-area'>
        <label>Mood:</label>
          <input type='text' name='mood' value={this.state.mood} onChange={this.formChangeHandler}></input> <br />
          <label>Gif</label>
          <input name='gif' value={this.state.gif} onChange={this.formChangeHandler}></input>
          <br />
          <label>Comment</label>
          <textarea name='comment' value={this.state.comment} onChange={this.formChangeHandler}></textarea>
        </div>
      </form>


        <button onClick={this.getGifs}>Get Cards</button>
        <button onClick={()=>{this.createCard()}}>Create New Card</button>
      <div className='uk-grid-medium uk-child-width-1-2@m uk-grid-match uk-grid' uk-grid='true'>
        {this.state.json.map((card, ind)=> <div key={ind}>{card}</div>)}
      </div>
    </div>
    )}
}
export default FormTest;