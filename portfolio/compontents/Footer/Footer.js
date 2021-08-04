import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Image from 'next/Image';
import profile from '../../public/profile.png';
import twitter from '../../public/twitter.png';
import linkedin from '../../public/linkedin.png';
import facebook from '../../public/facebook.png';
import github from '../../public/github.png';


const useStyles = makeStyles({
    
 
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div style={{height: '80vh', backgroundColor: 'rgba(65, 184, 83, .05)',}}>

        <Grid container direction="column" spacing={2} style={{alignContent: 'center', width: '80%', margin: 'auto'}}>
            <Grid item md={4} style={{width: '150px', height: '100px', margin: '60px auto 10px auto'}}>
                <Image src={profile} />
            </Grid>
            <Grid item md={4} style={{textAlign: 'center', margin: '20px auto'}}>
                <Typography variant="h4" style={{textAlign: 'center', color: '#EFA500'}}>Alexis Vacilli</Typography>
                <Typography variant="h6" style={{textAlign: 'center', color: 'rgba(255, 255, 255, .4)'}}>Get designed by the best.</Typography>
            </Grid>
            <Grid item container md={4} style={{padding: '10px 50px',alignContent: 'center', marginLeft: '23px'}}>
                <Grid item md={3}><Image src={twitter} width={50} height={50} /></Grid>
                <Grid item md={3}><Image src={linkedin} width={50} height={50}/></Grid>
                <Grid item md={3}><Image src={facebook} width={50} height={50} /></Grid>
                <Grid item md={3}><Image src={github} width={50} height={50} /></Grid>
            </Grid>
        </Grid>
        <div style={{textAlign: 'center', color: '#fff', opacity: .5, marginTop: '100px'}} >All rights reserved &copy; by me twentTwentyOne </div>
    </div>
  );
}
