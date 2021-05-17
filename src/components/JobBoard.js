import React, { useState, useEffect } from 'react';

import JobCard from './JobCard';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {
  getAllApplications,
  listenForNewApplications,
} from '../firebase/getAllApplications';
import ApplicationFormDialogBox from './ApplicationFormDialogBox';

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

function JobBoard(props) {
  const classes = useStyles();
  const jobStatuses = ['Applied', 'Interviewing', 'Rejected'];
  const [allApplications, setAllApplications] = useState([]);

  // this effect only runs when component initially mounts
  useEffect(() => {
    getAllApplications(props.user.uid)
      .then((applications) => {
        setAllApplications(applications);
      })
      .catch((error) => {
        console.warn(error);
        window.alert(error.message);
      });
  }, [props.user.uid]);

  // this effect will run when applications state changes
  useEffect(() => {
    const onSuccess = (snapshot) => {
      const updatedApplicationsList = snapshot.docs.map((snapshot) => {
        return snapshot.data();
      });
      setAllApplications(updatedApplicationsList);
    };

    const destroyListener = listenForNewApplications(props.user.uid, {
      next: onSuccess,
      error: () => {
        console.warn('firestore snapshot listener error');
      },
    });

    return () => {
      destroyListener();
    };
  }, [props.user.uid]);

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
                      <ApplicationFormDialogBox userId={props.user.uid} />
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
