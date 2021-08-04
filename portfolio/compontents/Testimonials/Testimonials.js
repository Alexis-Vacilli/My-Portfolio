import React, {useEffect} from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import Aos from 'aos';

const useStyles = makeStyles({
    container: {
        width: '60%',
        margin: '80px auto',
        backgroundColor: 'rgba(67, 190, 229, .05)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        padding: '50px',
        boxShadow: '0 30px 30px rgba(239, 165, 0, .05);',
    },
    profile: {
        padding: '50px',
        marginBottom: '20px',
        height: '20px',
        width: '20px',
        border: '5px solid #EFA500',
        borderRadius: '100%'

    }
});

export default function Testimonials() {
  var items = [
    {
      profile: '',
      comment: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud”`,
      name: 'Mupenzi Cedrick',
    },
    {
      profile: '',
      comment: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud”`,
      name: 'Mupenzi Cedrick',
    },
    {
      profile: '',
      comment: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud”`,
      name: 'Mupenzi Cedrick',
    },
  ];
  const classes = useStyles();
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <div style={{ padding: '20px' }}>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', color: '#EFA500' }}
      >
        Testimonials
      </Typography>
      <Typography
        variant='h6'
        style={{
          textAlign: 'center',
          color: 'rgba(250, 250, 250, .5)',
        }}
      >
        People I've worked with have said nice things....
      </Typography>

      <Carousel
        // NextIcon={<ArrowForwardIosIcon />}
        // PrevIcon={<ArrowBackIosIcon />}
        className={classes.carousel}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item className={classes.profile}>{props.item.profile}</Grid>
      <Grid item style={{color: '#fff', fontSize: '17px', fontWeight: 'bold'}}>{props.item.comment}</Grid>
      <Grid item style={{padding: '10px', marginTop: '20px', fontSize: '20px', color: '#EFA500', fontWeight: 'bold'}}>{props.item.name}</Grid>
    </Grid>
  );
}
