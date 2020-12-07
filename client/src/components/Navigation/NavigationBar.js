import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button'
import NavTest from './Navigation';



export default function(){

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

      const classes = useStyles;

      
   return( <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
            <NavTest />
            <Typography variant="h6" className={classes.title}>
            GIFJournal
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
</div>
    )
}