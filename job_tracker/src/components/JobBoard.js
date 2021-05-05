import React from 'react';

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
  const [spacing] = React.useState(2);
  const classes = useStyles();
  const jobStatus = ['Applied', 'Interviewing', 'Rejected', 'Offers'];
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={spacing}>
          {jobStatus.map((status) => (
            <Grid key={status} item>
              <Paper className={classes.paper}>{status}</Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default JobBoard;
