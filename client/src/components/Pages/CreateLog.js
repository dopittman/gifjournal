import React from 'react';
import MoodSelector from '../CardComponents/MoodSelector'
import GifRetrievalForm from '../GifRetrievalForm';
import axios from 'axios';

class CreateLog extends React.Component {
    constructor(){
        super()
        this.state = {
            mood: '',
            gif: '',
            comment: '',
        }

        this.createCard = this.createCard.bind(this);
        this.formChangeHandler = this.formChangeHandler.bind(this);
        this.updateUserGif = this.updateUserGif.bind(this); 
        this.updateUserMood = this.updateUserMood.bind(this); 
        
    }

      // Create New Journal Card
      // Change to fecth request eventually
  createCard(){
    axios.post(`http://localhost:3005/api/logs`, {
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

  updateUserMood(mood){
      this.setState({ mood: mood });
  }

  updateUserGif(gifURL){
    this.setState({ gif: gifURL })
  }

    render(){
        return(
            <div className="">
                <h1>This is the Create New Page</h1>
                <form onSubmit={()=>{this.createCard()}}>
                    <div className='form-area'>
                        
                        <div>

                          {/* Mood Selector Faces/Buttons */}
                          <MoodSelector 
                            updateUserMood = {this.updateUserMood}
                          />
                        </div>

                          {/* Retrieves Gifs from GIPHY API */}
                          <GifRetrievalForm 
                            updateUserGif = { this.updateUserGif }
                          />
                        <img src={this.state.gif} />
                        <br />

                        {/* Area for user's comment submission */}
                        <label>Comment</label>
                        <textarea name='comment' value={this.state.comment} onChange={this.formChangeHandler}></textarea>
                        <br/>
                        <input type="submit" value="Submit" />

   
                    </div>
                </form>


            </div>
        )
    }
}

export default CreateLog;