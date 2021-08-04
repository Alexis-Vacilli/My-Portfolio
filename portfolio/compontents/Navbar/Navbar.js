import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import profile from '../../public/profile.png';
import Link from 'next/Link';
import Image from 'next/Image';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import DrawerComponent from './DrawerComponent';

const useStyles = makeStyles({
  icon: {
    height: '100px',
    width: '100px',
  },
});

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item xs={false} sm={false} md={2}>
            <IconButton className={classes.icon}>
              <Image src={profile} alt='bitmoji' className={classes.profile} />
            </IconButton>
          </Grid>
          <Grid item md={4}></Grid>
          <Grid item md={3}></Grid>
          <Grid
            item
            container
            xs={false}
            sm={false}
            md={3}
            spacing={4}
            justifyContent='center'
            alignContent='center'
          >
            {isMatch ? (
              <DrawerComponent />
            ) : (
              <>
                <Grid item>
                  <WbSunnyIcon color='secondary' style={{ marginTop: '5px' }} />
                </Grid>
                <Grid item color='secondary'>
                  <Typography
                    variant='h6'
                    color='secondary'
                    style={{ fontWeight: 'bold' }}
                  >
                    <Link href='/'>Intro</Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                    <Link href='/blogs'>Blogs</Link>
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
