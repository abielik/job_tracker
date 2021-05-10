import React, { useState, useEffect } from 'react';

import JobCard from './Card';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { getAllApplications } from '../firebase/getAllApplications';

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
                <Paper className={classes.paper}>
                  {status}

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
                          timeStamp={filteredApplication.timeStamp}
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
