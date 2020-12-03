import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core/';
import { CardActionArea } from '@material-ui/core/';
import { CardActions }  from '@material-ui/core/';
import { CardContent } from '@material-ui/core/';
import { CardMedia } from '@material-ui/core/';
import { Button } from '@material-ui/core/';
import { Typography } from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
    },
  });


export default function MaterialGifCard( props ) {
  const classes = useStyles();


  return (
    <Card
      className={classes.root}
      elevation = {6}
        >
      <CardActionArea>
        <CardMedia
          component="img"
          alt= { props.title }
          height="240"
          image= { props.gif }
          title= {props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.mood}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.comment}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button onClick={() => {props.deleteCard(props.id)}} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}