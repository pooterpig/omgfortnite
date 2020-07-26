import React from 'react';
import './App.css';
import FortniteItemArray from './components/FortniteItemArray';
import Navbar from './components/Navbar'
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
// import { orange, red } from '@material-ui/core/colors'

const styles = theme => ({
  root: {
    backgroundColor: theme.primary
  }
})

class App extends React.Component {
  constructor(props) {
    super();
  }

  theme = createMuiTheme({
    primary: '#282c34',
    secondary: '#363636',
    text: {
      primary: '#b5b5b5',
      secondary: '#999999'
    }
  });

  render() {
    const { classes } = this.props;

    return (
      <>
      <div className={classes.root}>
      <ThemeProvider theme={this.theme}>
        <div>
          <Navbar />
        </div>
        <div>
          <FortniteItemArray />
        </div>
      </ThemeProvider>
      </div>
      </>
    )
  }
}

export default withStyles(styles, {withTheme: true})(App);