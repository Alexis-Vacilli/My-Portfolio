import React, {useEffect} from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import designImage from '../../public/design-icon.png';
import frontImage from '../../public/front-end.png';
import backImage from '../../public/back-end.png';
import Image from 'next/Image';
import Aos from 'aos';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 400,
    backgroundColor: 'rgba(0, 0, 0, .05)',
    boxShadow: '0 30px 30px rgba(239, 165, 0, .05)',
    borderRadius: '5px',
  },
  media: {
    height: 140,
  },
});

export default function Home() {
  const classes = useStyles();
  
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div
      style={{
        
        backgroundColor: 'rgba(65, 184, 83, .05)',
        padding: '20px',
      }}
    >
      <Typography
        variant='h4'
        style={{ textAlign: 'center', color: '#EFA500' }}
      >
        Services
      </Typography>
      <Typography
        variant='h6'
        style={{
          textAlign: 'center',
          color: 'rgba(250, 250, 250, .5)',
        }}
      >
        Lorem ipsum dolor sit amet.
      </Typography>
      <Grid container spacing={4} style={{ margin: '50px auto', width: '80%' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} data-aos="fade-up">
            <CardActionArea>
              <div style={{ margin: '50px 100px 10px 100px'  }}>
                <Image src={designImage} width={100} height={100} />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='h2'
                  style={{
                    textAlign: 'center',
                    color: '#EFA500',
                    fontWeight: 'bold',
                  }}
                >
                  Web Design
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  style={{ textAlign: 'center', color: '#fff' }}
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} data-aos="fade-up">
            <CardActionArea>
              <div style={{ margin: '50px 100px 10px 100px'  }}>
                <Image src={frontImage} width={100} height={100} />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='h2'
                  style={{
                    textAlign: 'center',
                    color: '#EFA500',
                    fontWeight: 'bold',
                  }}
                >
                  Responsive designs
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  style={{ textAlign: 'center', color: '#fff' }}
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} data-aos="fade-up">
            <CardActionArea>
              <div style={{ margin: '50px 100px 10px 100px' }}>
                <Image src={backImage} width={100} height={100} />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='h2'
                  style={{
                    textAlign: 'center',
                    color: '#EFA500',
                    fontWeight: 'bold',
                  }}
                >
                  Powerfull APIs
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  style={{ textAlign: 'center', color: '#fff' }}
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
