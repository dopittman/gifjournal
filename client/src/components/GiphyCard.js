import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core/';
import { CardActionArea } from '@material-ui/core/';
import { CardMedia } from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
    },
  });


export default function GiphyCard( props ) {
  const classes = useStyles();


  return (
    <Card
    onClick={() => {
      props.updateUserGif(props.gifImage); 
      props.updateGifTitle(props.title); 
      props.updateUserSelectedGif();
      props.clearGifGrid()}}

      className={classes.root}
      elevation = {6} 
      >
      <CardActionArea>
        <CardMedia
          component="img"
          alt= { props.title }
          height="200"
          image= { props.gifImage }
          title= {props.title}
        />
      </CardActionArea>
    </Card>
  )
}