import React, { useState } from 'react';


import { makeStyles, createStyles } from '@material-ui/core/styles';


const UserSelectedGif = (props) => {

    const useStyles = makeStyles({
        gifContainer: {
            width: 'fit-content',
            margin: 'auto',
            padding: '10px',
            backgroundColor: '#e6efff',
            border: '1px solid #4287f5',
            borderRadius: '7.5px'
        },
        emptyGifContainer: {
            display: 'none',
        }
    })
    const classes = useStyles();


    if( props.userSelectedGif === true ){
        return (
            <div className={classes.gifContainer}>
                <img src={props.gif} alt={props.title} />
            </div>
            )
    } else {
        return(
            <div className={classes.emptyGifContianer}>
            </div>)
    }


    
    
}

export default UserSelectedGif;