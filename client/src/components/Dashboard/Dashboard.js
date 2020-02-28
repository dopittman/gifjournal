import React from 'react'

import axios from 'axios';
import GifCard from '../GifCard';
import MaterialGifCard from '../MaterialCard';
import { Grid } from '@material-ui/core';



class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      json: [],
      latestLogs: []
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
       return <MaterialGifCard
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
    return (
    <div>
      <h1> Dashboard!</h1>
      <Grid
        container="true"
        direction="row"
        spacing="4"
      >
        {this.state.json.map((card, ind)=> <Grid item="true" xs="12" sm="6" md="6" lg="4" xl="3" justify="center"
            key={ind}> {card} 
          </Grid>
        )}

      </Grid>
    </div>
  )}
}

export default Dashboard;