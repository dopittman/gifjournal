import React, { useState } from 'react'
import {ReactComponent as HappyFace} from '../../Images/MoodSelectorImgs/smile-face.svg';
import {ReactComponent as NeutralFace} from '../../Images/MoodSelectorImgs/neutral-face.svg';
import {ReactComponent as SadFace} from '../../Images/MoodSelectorImgs/sad.svg';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const MoodSelector = (props) => {
    const [activeMood, setActive] = useState("");
    
    // MoodSelector Styles
    const useStyles = makeStyles({
        root: {
            padding: '20%',
            margin: 'auto',
            transition:'all .5s ease',
            color:'#41403E',
            outline:'none',
            boxShadow: '20px 38px 34px -26px hsla(0,0%,0%,.2)',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            border: 'solid 5px #41403E'
        },
        neutral: {
            fill: 'white',
            background: '#ffdd57',
            '&:hover': {
                background: "#facf25",
            }
        },
        happy: {
            fill: 'white',
            background: '#90ff6e',
            '&:hover': {
                background: "#5bff29",
            }
        },
        sad: {
            fill: 'white',
            background: '#ff6161',
            '&:hover': {
                background: "#ff1f1f",
            }
        },
        active: {
            transition:'all .5s ease',
            color:'#41403E',
            outline:'none',
            boxShadow: '20px 38px 34px -26px hsla(0,0%,0%,.2)',
            borderRadius: '50%',
            border: 'solid 10px #41403E'
        },
        activeNeutral: {
            backgroundColor: '#facf25',
        },
        activeHappy: {
            backgroundColor: '#5bff29',
        },
        activeSad: {
            backgroundColor: '#ff1f1f',
        }
        
      });
      const classes = useStyles();


      // Mood Selector Component
    return(

        <div className='MoodSelector' >
          <Grid container
          display='flex' 
          spacing={1} 
          direction="row"
          justify="center"
          alignItems="center" >

                {/*  Happy Face Button  */}
                <Grid item='true' xs="4" lg="2">
                <div className = {  activeMood  === "happy" ? `${ classes.root } ${ classes.happy } ${ classes.active } ${ classes.activeHappy }  mood-selector-happy` : `${ classes.root } ${ classes.happy } mood-selector-happy`  }
                       onClick = { () => { 
                           props.updateUserMood('happy'); 
                           setActive("happy"); 
                           console.log(activeMood === "happy"); console.log({activeMood}) } }>
                  <HappyFace 
                  className="mood-selector-happy"/>
                </div>
                </Grid>

                {/*  Neutral Face Button  */}
                <Grid item='true' xs="4" lg="2">
                <div className = {  activeMood  === "neutral" ? `${ classes.root } ${ classes.neutral } ${ classes.active } ${ classes.activeNeutral } mood-selector-neutral` : `${ classes.root } ${ classes.neutral } mood-selector-neutral`  }
                       onClick = { () => { 
                           props.updateUserMood('neutral'); 
                           setActive("neutral"); } }>
                  <NeutralFace 
                  className="mood-selector-happy"/>
                </div>
                </Grid>

                {/*  Sad Face Button  */}

                <Grid item='true' xs="4" lg="2">
                <div className = {  activeMood  === "sad" ? `${ classes.root } ${ classes.sad } ${classes.active} ${ classes.activeSad } mood-selector-sad` : `${ classes.root } ${ classes.sad } mood-selector-sad`  }
                       onClick = { () => { 
                           props.updateUserMood('sad');
                           setActive("sad") } }>
                    <SadFace 
                    className="mood-selector-happy"
                    />
                    </div>
                </Grid>
          </Grid>
        </div>
    )
}

export default MoodSelector;