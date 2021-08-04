import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Image from 'next/Image';

const useStyles = makeStyles({
  container: {
      padding: '150px'
  },
  root: {
    backgroundColor: 'rgba(67, 190, 229, .05)',
    boxShadow: '0 30px 30px rgba(239, 165, 0, .1);',
    borderRadius: '5px 5px 0 0'
  },
  media: {
    height: 140,
  },
});

export default function Blogs() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction='column' className={classes.container}>
        <Grid item container spacing={6}>
          <Grid item md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdF4pIsjnNMymZx5QRXKOsZYduaaEmdRZU3QUAJgrGMVw0uZFLCxS91nzMUmMMRsV4WCU&usqp=CAU'
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='h2' style={{textAlign: 'center', fontWeight: 'bold', color: '#EFA500'}}>
                    The Ultimate Docker Course
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    style={{ margin: 'auto', padding: '10px 20px', color: '#fff'}}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4}>
          <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image='https://lh3.googleusercontent.com/proxy/JU-ap0g0LVdacTYms9BsGE4gWuDg4tnP9gUtGDMfohhmiClT9mba74nDfebcW4stukid_ARiTtl3vvU07z4q2craPk0Ef6ME4V1qkrmUVD3V8MPCcwFuKhcyGAdvSF4xns7sp-49uStKaA'
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='h2' style={{textAlign: 'center', fontWeight: 'bold', color: '#EFA500'}}>
                  The Ultimate nodejs tutorial
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    style={{ margin: 'auto', padding: '10px 20px', color: '#fff'}}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4}>
          <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image='https://res.cloudinary.com/practicaldev/image/fetch/s--M_64cqNx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/jpwdjot312cg4w99o1tj.png'
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='h2' style={{textAlign: 'center', fontWeight: 'bold', color: '#EFA500'}}>
                    The Ultimate JS tutorial
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    style={{ margin: 'auto', padding: '10px 20px', color: '#fff'}}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </>
  );
}
