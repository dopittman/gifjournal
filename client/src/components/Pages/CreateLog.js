import React from 'react';
import GifRetrievalForm from '../GifRetrievalForm';

class CreateLog extends React.Component {
    constructor(){
        super()
        this.state = {
            mood: '',
            gif: '',
            comment: '',
        }

        this.createCard = this.createCard.bind(this);
    }

      // Create New Journal Card
  createCard(){
    fetch.post(`http://localhost:3005/api/logs`, {
    mood: this.state.mood,
    gif: this.state.gif,
    comment: this.state.comment
    })
    .catch((err)=>{console.log(err)});
  }




  // Handle form data
  formChangeHandler= (e) => {
    this.setState({ [e.target.name]:e.target.value });
  }

    render(){
        return(
            <div>
                <h1>This is the Create New Page</h1>
                <GifRetrievalForm />
            </div>
        )
    }
}

export default CreateLog;