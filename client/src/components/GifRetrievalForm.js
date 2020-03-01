import React from 'react';
import { giphyKey } from '../config/keys';
import MaterialCard from './MaterialCard';
import { Grid } from '@material-ui/core';


class GifRetrievalForm extends React.Component {

    state = {
      fetchedGifs: []
    }

    fetchUserGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=orange&limit=25&offset=0&rating=PG-13&lang=en`)
        .then(response => response.json())
        .then(response => this.setState({fetchedGifs: response.data}))
        .catch(err => console.log(err));
    }

    // Map fetchedGifs state to cards and display them
    // displayFetchedGifs = () => {
    //   this.state.fetchedGifs.map((gif)=>{
    //     return <MaterialCard
    //       key= {gif.id}
    //       alt= {gif.title}
    //       gifImage= {gif.images.fixed_height.url}
    //     />
    //   });
    // }

    componentDidMount() {
       this.fetchUserGifs();
    }

    render(){
    return (

      <div>
      <Grid
        container= {true}
        direction="row"
        spacing={4}
      >
        {this.state.fetchedGifs.map((gif, ind)=> <Grid item="true" xs="12" sm="6" md="6" lg="4" xl="3" justify="center"
            key={ind} >  
            <MaterialCard
              key= {gif.id}
              title= {gif.title}
              gifImage= {gif.images.fixed_height.url}
              />

          </Grid>
        )}
      </Grid>
    </div>  
      )
    }
}


export default GifRetrievalForm