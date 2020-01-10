import React from 'react'

import axios from 'axios';
import GifCard from '../GifCard';

class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      json: [],
    };

  }

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

  displayCards(arr){
    const allGifs = arr.map((post, ind)=>{
      console.log(post)
       return <GifCard
        key = {post._id}
        id= {post._id}
        gif= {post.gif}
        mood = {post.mood}
        comment = {post.comment}
        />
    })
    return allGifs;
  }

  componentDidMount(){
    this.getGifs();
  }

  render(){
    return (<div>
      <h1> Dashboard!</h1>
      <div className='uk-grid-medium uk-child-width-1-2@m uk-grid-match uk-grid' uk-grid='true'>
        {this.state.json.map((card, ind)=> <div key={ind}>{card}</div>)}
      </div>
    </div>

  )}
}

export default Dashboard;