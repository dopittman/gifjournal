import React from 'react';
import MoodSelector from '../CardComponents/MoodSelector'
import GifRetrievalForm from '../GifRetrievalForm';
import UserSelectedGif from '../CreateLogComponents/UserSelectedGif'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';


class CreateLog extends React.Component {
    constructor(){
        super()
        this.state = {
          //  Will be sent to the GifJtouan API/Database
            mood: '',
            gif: '',
            comment: '',
            title:'',

            //  Show/Hide the user's selected gif
            userSelectedGif: false,
        }

        this.createCard = this.createCard.bind(this);
        this.formChangeHandler = this.formChangeHandler.bind(this);
        this.updateUserGif = this.updateUserGif.bind(this); 
        this.updateUserMood = this.updateUserMood.bind(this); 
        this.updateGifTitle = this.updateGifTitle.bind(this);
        this.updateUserSelectedGif = this.updateUserSelectedGif.bind(this);
        
    }

      // Create New Journal Card
      // Change to fecth request eventually
  createCard(){
    axios.post(`http://localhost:3005/api/logs`, {
    mood: this.state.mood,
    gif: this.state.gif,
    comment: this.state.comment
    })
    .catch((err)=>{console.log(err.response)});
  }

  // Handle errors received

  // Handle form data
  formChangeHandler = (e) => {
    this.setState({ [e.target.name]:e.target.value });
  }

  updateUserMood(mood){
      this.setState({ mood: mood });
  }

  updateUserGif(gifURL){
    this.setState({ gif: gifURL })
  }

  updateGifTitle(gifTitle){
    this.setState({ title: gifTitle })
  }

  updateUserSelectedGif(){
    this.setState({userSelectedGif: true})
  }

  // Testing button purposes only
  handleClick(e) {
    e.preventDefault();
    console.log('Button was clicked');
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
                            updateGifTitle = { this.updateGifTitle }
                            updateUserSelectedGif = { this.updateUserSelectedGif }
                          />

                        <br />
                        <UserSelectedGif 
                            gif = { this.state.gif }
                            title = { this.state.title }
                            userSelectedGif = { this.state.userSelectedGif}
                            key= { this.state.userSelectedGif }
                          />

                        {/* Area for user's comment submission */}
                        <textarea className='user-comment-textarea' aria-label='user comment' placeholder="Right now I'm feeling..."  name = 'comment' value= {this.state.comment} onChange={this.formChangeHandler} >

                        </textarea>
                        <br/>
                        <Button
                        onClick={this.handleClick}
                        type='submit'
                        variant='contained'
                        className='log-submit-button'
                        startIcon={ <SaveAltIcon /> }
                        >
                        Submit
                        </Button>

   
                    </div>
                </form>


            </div>
        )
    }
}

export default CreateLog;