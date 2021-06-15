import React from 'react';
import './App.css';
import BottomCarousel from './components/bottomCarousel';
import Box from '@material-ui/core/Box';
import HeadCarousel from './components/headCarousel';
import TorsoCarousel from './components/torsoCarousel';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {HeadImages} from './util/constants.js';
import {TorsoImages} from './util/constants';
import {BottomImages} from './util/constants';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Comic Sans MS"',
},
});

const useStyles = makeStyles(() => ({
  appContainer:{
    marginBottom:0,
    marginLeft:500,
    marginRight:500,
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box
          className={classes.appContainer}
          display="flex"
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4">
            Hiroshi Dress Up!
          </Typography>
          <Typography variant="p">
            Create the Hiroshi of your dreams :)
          </Typography>
          <HeadCarousel images={HeadImages}/>
          <TorsoCarousel images={TorsoImages}/>
          <BottomCarousel images={BottomImages}/>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
