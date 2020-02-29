import React from 'react';


class GifRetrievalForm extends React.Component {

    getGifs = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }

    componentDidMount() {
       this.getGifs();
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