import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


import useStyles from './styles';

import Home from './Home';
import Container from '@material-ui/core/Container';

const App = () => {
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
      </Toolbar>
    </AppBar>
    <Container>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about">
          <h1>About Page</h1>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Container>
  </div>
  );
};

export default App;
