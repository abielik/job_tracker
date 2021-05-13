import React, { useState, useEffect } from 'react';

import JobCard from './JobCard';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { getAllApplications } from '../firebase/getAllApplications';
import DialogBox from './DialogBox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    overflow: 'auto',
    height: 700,
    width: 300,
  },
  columnHeading: {
    backgroundColor: 'lightGray',
  },
}));

function JobBoard() {
  const classes = useStyles();
  const jobStatuses = ['Applied', 'Interviewing', 'Rejected'];
  const [allApplications, setAllApplications] = useState([]);

  useEffect(() => {
    getAllApplications('X7piePx0YhziBYpEVsEf')
      .then((applications) => {
        setAllApplications(applications);
      })
      .catch((error) => {
        console.warn(error);
        window.alert(error.message);
      });
  }, []);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={12}>
        <Grid container justify='center' spacing={2}>
          {jobStatuses.map((status, index) => {
            return (
              <Grid item key={index}>
                <Paper className={classes.columnHeading}>
                  <Grid>
                    {status}
                    <Grid className={classes.jobCount}>
                      <Typography>
                        {allApplications.filter((application) => {
                          return application.status === status.toLowerCase();
                        }).length + ' jobs'}
                      </Typography>
                    </Grid>
                    <Grid>
                      <DialogBox />
                    </Grid>
                  </Grid>
                </Paper>
                <Paper className={classes.paper}>
                  {allApplications
                    .filter((application) => {
                      return application.status === status.toLowerCase();
                    })
                    .map((filteredApplication, index) => {
                      return (
                        <JobCard
                          key={index}
                          title={filteredApplication.title}
                          company={filteredApplication.company}
                          dateApplied={filteredApplication.dateApplied}
                          jobLink={filteredApplication.jobLink}
                        />
                      );
                    })}
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
