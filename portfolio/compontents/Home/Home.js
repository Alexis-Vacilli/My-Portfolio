import { Paper, Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image from 'next/Image';
import ornaments from '../../public/MacBook.png';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles({
    paperContainer: {
        height: '100vh',
        backgroundImage: `url(${ornaments})`,
    }
   
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.paperContainer}>
      {/* <Image src={ornaments} /> */}
      <Grid
        container
        style={{ padding: '150px', marginTop: '100px' }}
      >
        <Grid item container direction="column" spacing={4} md={6}>
          <Grid item>
            <Typography variant="h4" style={{color: '#fff', fontWeight: 'bold'}}>
              I am a <span style={{color: '#EFA500'}}> UI/UX designer</span>, Front-end & Back-end <span style={{color: '#EFA500'}}>developer</span>, I design
              and code beautifully simple things, and I love what I do.
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item style={{marginTop: '8px'}}><ArrowDownwardIcon style={{color: 'EFA500'}}/></Grid>
            <Grid item><Button size="large" style={{borderRadius: '0', color: '#EFA500'}}>Tell me more</Button></Grid>
          </Grid>
        </Grid>
        <Grid item ></Grid>
      </Grid>
    </div>
  );
}
