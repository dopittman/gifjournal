import React from 'react';
import { giphyKey } from '../config/keys';

class GifRetrievalForm extends React.Component {

    fetchUserGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=orange&limit=25&offset=0&rating=PG-13&lang=en`)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }

    componentDidMount() {
       this.fetchUserGifs();
       console.log(`GifKey: ${giphyKey}`);
    }

    render(){
    return (
    <div>
        <h1>It works</h1>
    </div>
  )
    }
}


export default GifRetrievalForm