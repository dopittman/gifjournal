import React, { useState } from 'react'
import {ReactComponent as HappyFace} from '../../Images/MoodSelectorImgs/smile-face.svg';
import {ReactComponent as NeutralFace} from '../../Images/MoodSelectorImgs/neutral-face.svg';
import {ReactComponent as SadFace} from '../../Images/MoodSelectorImgs/sad.svg';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const MoodSelector = (props) => {
    
    
    // Styles
    const useStyles = makeStyles({
        root: {
            height: '100px',
            width: '100px',
            padding: '2rem',
            margin: '0'
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
        }
        
      });
      const classes = useStyles();


    return(

        <div className='MoodSelector' >
          <Grid container 
          spacing={0} 
          direction="row"
          justify="center"
          alignItems="center" >

                <Grid item>
                <div className = { `${ classes.root } ${ classes.happy } mood-selector-happy` }
                       onClick = { () => { props.updateUserMood('happy') } }>
                  <HappyFace />
                </div>
                </Grid>

                <Grid item>
                <div className = { `${ classes.root } ${ classes.neutral }` }
                       onClick = { () => { props.updateUserMood('neutral') } }>
                  <NeutralFace />
                </div>
                </Grid>

                <Grid item>
                <div className = { `${ classes.root } ${ classes.sad } mood-selector-sad` } 
                       onClick = { () => { 
                           console.log('clicked')
                           return props.updateUserMood('sad') } }>
                    <SadFace />
                    </div>
                </Grid>
          </Grid>
        </div>
    )
}

export default MoodSelector;