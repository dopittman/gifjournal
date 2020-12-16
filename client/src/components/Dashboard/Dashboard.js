import React from 'react'

import axios from 'axios';
import MaterialGifCard from '../MaterialCard';
import { Grid } from '@material-ui/core';


class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      json: [],
      latestLogs: []
    };
      this.deleteCard = this.deleteCard.bind(this);
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

  displayCards(arr) {
    const allGifs = arr.map((post, ind)=>{
      console.log(post)
       return <MaterialGifCard
        key = {post._id}
        id= {post._id}
        gif= {post.gif}
        mood = {post.mood}
        comment = {post.comment}
        deleteCard = {this.deleteCard}
        />
    });
    return allGifs;
  }

    deleteCard(cardId) {

      // Replace 'confirm' function with a custom modal to disable 'Prevent additional dialog boxes from showing up' option
      const confirm = window.confirm("Are you sure?");

      if(confirm === true) {
      const currentCards = this.state.json;

      this.setState({json: currentCards.filter((card) => { return card.props.id !== cardId})});
      console.log(this.state.json);
      console.log(currentCards);
      console.log(cardId);
      axios.delete(`http://localhost:3005/api/logs/`, {
        data: {id: cardId}})
      .catch((err)=>{console.log(err)});
      } 
    }
  

  componentDidMount(){
    this.getGifs();
  }

  render(){

    return (
    <div>
      <h1> Dashboard! </h1>
      <Grid 
        container= {true}
        direction="row"
        spacing={0}
      >
        
        {this.state.json.map((card, ind)=> <Grid item={true} xs={10} sm={6} md={6} lg={4} xl={3} className="dashboard-card"
            key={ind}> {card} 
          </Grid>
        )}

      </Grid>
    </div>
  )}
}

export default Dashboard;