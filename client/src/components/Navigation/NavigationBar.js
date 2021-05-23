import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Grid, Slide } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import SignInBtn from './NavigationButtons/SignInBtn';
import {ReactComponent as Logo} from '../../Images/Logo/gifJournal-NavBar.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    position: 'absolute',
    left: '-1%',
    top: '-8%',
    width: '300',
    height: '100'
  },
}));


export default function(){


  const classes = useStyles();
      
   return( <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>

          <Grid container>

          {/* Title / Logo */}
            <Grid item md={10} sm={8} >
              <Logo 
              className = {classes.title}
              />
            </Grid>

          {/* Top-Level Nav Buttons */}
          <Grid item md={1} sm={2} xs={3}>
            <Button className='try-it-button' variant='text' color="inherit">
                    Try It!
            </Button>
            </Grid>

            <Grid item md={1} sm={2} xs={3}>
            < SignInBtn />
            </Grid>


          </Grid>
        </Toolbar>
        </AppBar>
  </div>
    )
}