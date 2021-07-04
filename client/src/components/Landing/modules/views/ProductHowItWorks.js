import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import GiphyLogo from '../../../../Images/dashboardImages/1x/GiphyLogo.png'
import {ReactComponent as HappyFace} from '../../../../Images/MoodSelectorImgs/smile-face.svg';
import {ReactComponent as NeutralFace} from '../../../../Images/MoodSelectorImgs/neutral-face.svg';
import {ReactComponent as SadFace} from '../../../../Images/MoodSelectorImgs/sad.svg';
import Typing from '../components/ExampleTyping';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
  stepTwoImage: {
    width: '100%',
    height: '6rem',
  },
  autotypingDiv: {
    height: 125,
    width: '100%',
    fontSize: '1.3rem',
    borderRadius: 3,
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  const [activeMood, setActive] = useState("");
    
  // MoodSelector Styles
  const useStyles = makeStyles({
      root: {
          padding: '20%',
          margin: 'auto',
          transition:'all .5s ease',
          color:'#41403E',
          outline:'none',
          boxShadow: '20px 38px 34px -26px hsla(0,0%,0%,.2)',
          borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
          border: 'solid 2px #41403E'
      },
      neutral: {
          fill: 'white',
          background: '#ffdd57',
          '&:hover': {
              background: "#facf25",
          }
      },
      happy: {
          fill: 'white',
          background: '#90ff6e',
          '&:hover': {
              background: "#5bff29",
          }
      },
      sad: {
          fill: 'white',
          background: '#ff6161',
          '&:hover': {
              background: "#ff1f1f",
          }
      },
      active: {
          transition:'all .5s ease',
          color:'#41403E',
          outline:'none',
          boxShadow: '20px 38px 34px -26px hsla(0,0%,0%,.2)',
          borderRadius: '50%',
          border: 'solid 3px #41403E'
      },
      activeNeutral: {
          backgroundColor: '#facf25',
      },
      activeHappy: {
          backgroundColor: '#5bff29',
      },
      activeSad: {
          backgroundColor: '#ff1f1f',
      },
      
    });
    const classesMoods = useStyles();



  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          How it works
        </Typography>
        <div>
        <Grid container spacing={5}>

        {/* Step one information and components */}
            <Grid item xs={12} md={4}>

        {/* Beginning of Grid for Mood Selector Demo */}
        <Grid container
          display='flex' 
          spacing={1} 
          direction="row"
          justify="center"
          alignItems="center" >

            {/*  Happy Face Button  */}
            <Grid item='true' xs="4" lg="3">
                <div className = {  activeMood  === "happy" ? `${ classesMoods.root } ${ classesMoods.happy } ${ classesMoods.active } ${ classesMoods.activeHappy }  mood-selector-happy` : `${ classesMoods.root } ${ classesMoods.happy } mood-selector-happy`  }
                onClick = { () => { 
                    setActive("happy"); 
                }}>
                  <HappyFace />
                </div>
            </Grid>

                {/*  Neutral Face Button  */}
                <Grid item='true' xs="4" lg="3">
                  <div className = {  activeMood  === "neutral" ? `${ classesMoods.root } ${ classesMoods.neutral } ${ classesMoods.active } ${ classesMoods.activeNeutral } mood-selector-neutral` : `${ classesMoods.root } ${ classesMoods.neutral } mood-selector-neutral`  }
                  onClick = { () => { 
                      setActive("neutral"); } }>
                  <NeutralFace />
                  </div>
                </Grid>

                {/*  Sad Face Button  */}
                <Grid item='true' xs="4" lg="3">
                  <div className = {  activeMood  === "sad" ? `${ classesMoods.root } ${ classesMoods.sad } ${classesMoods.active} ${ classesMoods.activeSad } mood-selector-sad` : `${ classesMoods.root } ${ classesMoods.sad } mood-selector-sad`  }
                        onClick = { () => { 
                            setActive("sad") } }>
                      <SadFace />
                  </div>
                </Grid>

            </Grid>


              <div className={classes.item}>
                <div className={classes.number}> <br />1.</div>
                <Typography variant="h5" align="center">
                  Select your current mood when creating the journal entry. <br /><b>Go ahead, give it a try!</b>
                </Typography>
              </div>
            </Grid>


            {/*  Step Two Grid  */}
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img className ={classes.stepTwoImage} src = {GiphyLogo} />
                <div className={classes.number}><br />2.</div>
                <Typography variant="h5" align="center">
                  Search for a Gif that sums up how you feel about this journal entry. GIPHY allows access to millions of GIFs to choose from.
                </Typography>
              </div>
            </Grid>


            {/* Step Three Grid */}
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.autotypingDiv}>
                  <Typing />
                </div>
                <div className={classes.number}>3.</div>
                <Typography variant="h5" align="center">
                Optionally, you can also enter a little message that gives more context to the Gif and your current mood.
                </Typography>
              </div>
            </Grid>
            
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          href="/premium-themes/onepirate/sign-up/"
        >
          Get started
        </Button>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
