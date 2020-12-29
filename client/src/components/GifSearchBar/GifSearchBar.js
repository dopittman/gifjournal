import React, { useState } from 'react';

import { Grid, TextareaAutosize } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';



const GifSearchBar = (props) => {

    const useStyles = makeStyles({
        searchContainer: {
        },
        searchBarContainer: {
            width:'100%',
        },
        formStyles: {
            position: 'relative',
        },
        searchIcon: {
            position: 'relative',
            right: '-2.3rem',
            top: '.4rem',
            background: 'none',
            fill: '#4287f5',
        },
        searchBar: {
            height: '35px',
            backgroundColor: 'white',
            fontSize: 'larger',
            border: '1px solid #4287f5',
            borderRadius: '16.5px',
            paddingLeft: '2.5rem',
            margin: '4px',
            marginRight: '1.6rem'
        },
        submitButton: {
            position: 'absolute',
            top: '20%',
            right: '-15%',
            border: 'none',
            background: 'none',
        },
    });

    const classes = useStyles();


return( <div classeName= { classes.searchContainer } >

    {/* Put the search bar, icon, and submit button in a container as items and style using MUI styling/flex */}
    <Grid container justify='center' className={classes.searchContainer}>
   
    {/* When submited form will call fetchUserGifs and return results in a grid*/}
    <Grid item className={classes.searchBarContainer}>

            <form onSubmit={props.handleSubmit} className= {classes.formStyles}>
            <SearchIcon className={classes.searchIcon}/> 
                <input 
                className= {classes.searchBar}
                aria-label= 'Search Bar'
                type= "text" 
                name= "searchTerm"
                placeholder= "Search for GIFs.." 
                onChange= { props.handleChange } 
                value= {props.searchTerm} 
                />

            </form> 
            </Grid>

    </Grid>
</div>
    )
}

export default GifSearchBar;