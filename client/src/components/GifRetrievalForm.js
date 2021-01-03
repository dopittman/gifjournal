import React from 'react';
import { giphyKey } from '../config/keys';
import MaterialCard from './MaterialCard';
import { Grid } from '@material-ui/core';
import GiphyCard from './GiphyCard';
import GifSearchBar from './CreateLogComponents/GifSearchBar'


class GifRetrievalForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fetchedGifs: [],
      searchTerm: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchUserGifs = this.fetchUserGifs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearGifGrid = this.clearGifGrid.bind(this);
  }



    // Fetches gifs from GIPHY API
    fetchUserGifs = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${searchTerm}&limit=25&offset=0&rating=PG-13&lang=en`)
        .then(response => response.json())
        .then(response => this.setState({fetchedGifs: response.data}))
        .catch(err => console.log(err));
    };


    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      this.fetchUserGifs(this.state.searchTerm);
      this.setState({ searchTerm: '' });

      console.log(this.state.fetchedGifs);
    }

    clearGifGrid(){
      this.setState({fetchedGifs: []})

    }

    componentDidMount() {
    }

    render(){
    return (

      <div>
        <GifSearchBar 
        handleSubmit = {this.handleSubmit}
        handleChange = {this.handleChange}
        value = {this.state.searchTerm}
        />
      <br />

      {/* Place Grid component in a function that shows the grid after search and disappears after one is cliecked */}
      <Grid
        container= {true}
        direction= "row"
        spacing= {4}
      >
        {this.state.fetchedGifs.map((gif, ind)=> <Grid item="true" xs="12" sm="6" md="6" lg="4" xl="3" justify="center"
            key={ind} >  
            <GiphyCard
              key= {gif.id}
              title= {gif.title}
              gifImage= {gif.images.fixed_height.url}
              updateUserGif = { this.props.updateUserGif }
              updateGifTitle = { this.props.updateGifTitle }
              updateUserSelectedGif = { this.props.updateUserSelectedGif}
              clearGifGrid = {this.clearGifGrid}
              />

          </Grid>
        )}
      </Grid>
    </div>  
      )
    }
}


export default GifRetrievalForm