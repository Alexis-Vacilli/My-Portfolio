import Grid from '@material-ui/core/Grid';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Navbar from '../compontents/Navbar/Navbar';
import Welcome from '../compontents/Home/Home';
import Services from '../compontents/Cards/Services';
import Testimonials from '../compontents/Testimonials/Testimonials';
import Footer from '../compontents/Footer/Footer';




const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: '#000',
      textPrimary: '#41B853',
    },
    secondary: {
      main: '#EFA500',
      textSecondary: '#EFA500'
    },
    
    
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item>
          <Welcome />
        </Grid>
        <Grid item>
          <Services />
        </Grid>
        <Grid item>
          <Testimonials />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>

    </ThemeProvider>
  )
}
