import Grid from '@material-ui/core/Grid';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Navbar from '../../compontents/Navbar/Navbar';
import Footer from '../../compontents/Footer/Footer';
import Search from '../../compontents/Blogs/Search';
import Blogs from '../../compontents/Blogs/blogs';





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
          {/* <Search /> */}
          <Blogs />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>

    </ThemeProvider>
  )
}
