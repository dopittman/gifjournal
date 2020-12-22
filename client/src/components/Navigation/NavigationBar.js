import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Grid, Slide } from '@material-ui/core';

import Button from '@material-ui/core/Button'
import SignInBtn from './NavigationButtons/SignInBtn'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: '3%',
  },
}));


export default function(){


  const classes = useStyles();
      
   return( <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>

          <Grid container>

          {/* Title / Logo */}
            <Grid item md={10} sm={9} >
              <Typography align='left' variant="h6" className={ classes.title }>
            gifJournal
            </Typography>
            </Grid>

          {/* Top-Level Nav Buttons */}
          <Grid item md={1} sm={1}>
            <Button className='try-it-button' variant='text' color="inherit">
                    Try It!
            </Button>
            </Grid>

            <Grid item md={1} sm={2} >
            < SignInBtn />
            </Grid>


          </Grid>
        </Toolbar>
        </AppBar>
  </div>
    )
}