import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const useStyles = makeStyles(() => ({
    loginBtn: {
        backgroundColor: 'rgba(300,300,300,.2)',
        borderRadius: '16.5px',
        paddingLeft: '16px',
        paddingRight: '12px',
        padding: '.3rem',
        textTransform: 'none',
      },
  }));

export default function(){

    const classes = useStyles();

    return (
        <Button className={classes.loginBtn} color='inherit'>
            Sign In <ChevronRightIcon />
        </ Button>
    )
}