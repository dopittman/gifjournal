import React, { useState } from 'react'
import {ReactComponent as HappyFace} from '../../Images/MoodSelectorImgs/smile-face.svg';
import {ReactComponent as NeutralFace} from '../../Images/MoodSelectorImgs/neutral-face.svg';
import {ReactComponent as SadFace} from '../../Images/MoodSelectorImgs/sad.svg';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const MoodSelector = (props) => {
    const [activeMood, setActive] = useState("");
    
    // Styles
    const useStyles = makeStyles({
        root: {
            height: '100px',
            width: '100px',
            padding: '2rem',
            margin: '0',
            transition:'all .5s ease',
            color:'#41403E',
            outline:'none',
            boxShadow: '20px 38px 34px -26px hsla(0,0%,0%,.2)',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            border: 'solid 2px #41403E'
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
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            borderRadius: '50%',
            border: 'solid 8px #41403E'
        }
        
      });
      const classes = useStyles();


      // Mood Selector Component
    return(

        <div className='MoodSelector' >
          <Grid container 
          spacing={0} 
          direction="row"
          justify="center"
          alignItems="center" >

                {/*  Happy Face Button  */}
                <Grid item>
                <div className = {  activeMood  === "happy" ? `${ classes.root } ${ classes.happy } ${classes.active} mood-selector-happy` : `${ classes.root } ${ classes.happy } mood-selector-happy`  }
                       onClick = { () => { 
                           props.updateUserMood('happy'); 
                           setActive("happy"); 
                           console.log(activeMood =="happy"); console.log({activeMood}) } }>
                  <HappyFace />
                </div>
                </Grid>

                {/*  Neutral Face Button  */}
                <Grid item>
                <div className = {  activeMood  === "neutral" ? `${ classes.root } ${ classes.neutral } ${classes.active} mood-selector-neutral` : `${ classes.root } ${ classes.neutral } mood-selector-neutral`  }
                       onClick = { () => { 
                           props.updateUserMood('neutral'); 
                           setActive("neutral"); } }>
                  <NeutralFace />
                </div>
                </Grid>

                {/*  Sad Face Button  */}

                <Grid item>
                <div className = {  activeMood  === "sad" ? `${ classes.root } ${ classes.sad } ${classes.active} mood-selector-sad` : `${ classes.root } ${ classes.sad } mood-selector-sad`  }
                       onClick = { () => { 
                           props.updateUserMood('sad');
                           setActive("sad") } }>
                    <SadFace />
                    </div>
                </Grid>
          </Grid>
        </div>
    )
}

export default MoodSelector;