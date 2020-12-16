import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const useStyles = makeStyles(() => ({
    loginBtn: {
        color: '#fff',
        backgroundColor: 'rgba(300,300,300,.18)',
        borderRadius: '16.5px',
        marginRight: '8px',
        paddingLeft: '16px',
        paddingRight: '12px',
        padding: '.3rem',
        textTransform: 'none',
        minWidth: 'max-content',
        '&:hover': {
            background: 'rgba(300,300,300,.5)',
      },
    }
  }));

 const SignInButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const classes = useStyles();

    return (
        <Button 
            onMouseEnter={() => { setIsHovered(true) } }
            onMouseLeave={() => { setIsHovered(false)} }
        className={`${classes.loginBtn} hvr-forward hvr-forward:hover hvr-forward:focus hvr-forward:active .hvr-forward-moved`} color='inherit'>
            Sign In <ChevronRightIcon  />
        </ Button>

        /* 
        <div className={isHovered === true ? 'hvr-forward hvr-forward:hover hvr-forward:focus hvr-forward:active .hvr-forward-moved ' : 'hvr-forward'}>
        */ 
    )
}

export default SignInButton;