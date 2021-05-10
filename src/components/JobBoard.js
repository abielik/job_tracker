import React from 'react';

import Cards from './Cards';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 700,
    width: 300,
  },
}));

function JobBoard() {
  const classes = useStyles();
  const jobStatuses = ['Applied', 'Interviewing', 'Rejected'];
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={12}>
        <Grid container justify='center' spacing={2}>
          {jobStatuses.map((status, index) => {
            return (
              <Grid item key={index}>
                <Paper className={classes.paper}>
                  {status}
                  <Cards />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default JobBoard;