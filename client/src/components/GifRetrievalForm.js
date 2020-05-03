import React from 'react';
import { giphyKey } from '../config/keys';
import MaterialCard from './MaterialCard';
import { Grid } from '@material-ui/core';


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
      console.log(this.state.fetchedGifs);
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
      //  this.fetchUserGifs('red'); // For testing purposes only
    }

    render(){
    return (

      <div>

      {/* When submited form will call fetchUserGifs and return results in a grid*/}
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="searchTerm" placeholder="Search" onChange={this.handleChange} />
        <button>-></button>
      </form>
      <br />

      {/* Place Grid component in a function that shows the grid after search and disappears after one is cliecked */}
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