import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import cardImg from '../../../../Images/dashboardImages/1x/CircleCardImg.png';
import HappyFace from '../../../../Images/dashboardImages/1x/HealthySmile.png';
import LibraryCards from '../../../../Images/dashboardImages/1x/LibraryCards.png';


const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 105,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img src= {cardImg} alt="Cards" className={classes.image}/>
              <Typography variant="h6" className={classes.title}>
                Your Memories, <br /> Your Gifs
              </Typography>
              <Typography variant="h5">
                {'gifJournal allows you to quickly and easily save your favorite memories, experiences, and random thoughts with a few quick taps. With access to millions of gifs from Giphy there is guranteed to be one to match your mood!'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img src= {HappyFace} alt= 'Happy Face' className={classes.image} />
              <Typography variant="h6" className={classes.title}>
                Journaling for Your Health
              </Typography>
              <Typography variant="h5">
                {'Daily journaling has been shown to lower mental stress, anxiety, and increase feelings of well being. Having a place to place your thoughts can help keep your mind organized and free to focus on the important things.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <img src= {LibraryCards} alt= 'Set of Cards' className={classes.image} />
              <Typography variant="h6" className={classes.title}>
                An Animated Library of Memories
              </Typography>
              <Typography variant="h5">
                {'Relive your memories as you travel back though your journal logs and see the gifs you selected to remember your important experiences. '}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
