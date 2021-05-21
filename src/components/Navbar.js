import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuDropdown from './MenuDropdown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
}));

function Navbar(props) {
  const classes = useStyles();
  console.log('whats props ', props);
  return (
    <div className={classes.root}>
      <Grid container direction='row' justify='space-between'>
        <AppBar position='static'>
          <Toolbar>
            <Grid item xs={1}>
              <MenuDropdown />
            </Grid>
            <Grid item xs={10}>
              <Typography variant='h6'>
                Welcome, {props.user.displayName}
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

export default Navbar;
