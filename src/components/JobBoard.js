import React, { useState, useEffect } from 'react';

import JobCard from './JobCard';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {
  //getAllApplications,
  listenForNewApplications,
} from '../firebase/getAllApplications';
import ApplicationFormDialogBox from './ApplicationFormDialogBox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '10px',
  },
  paper: {
    overflow: 'auto',
    height: 700,
    width: 300,
  },
  columnHeading: {
    backgroundColor: 'lightGray',
    paddingBottom: '5px',
  },
  gridContainer: {
    paddingBottom: '5px',
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
    //backgroundColor: '#3f51b5',
  },
}));

function JobBoard(props) {
  const classes = useStyles();
  const jobStatuses = ['Applied', 'Interviewing', 'Rejected'];
  const [allApplications, setAllApplications] = useState([]);

  // this effect only runs when component initially mounts
  // useEffect(() => {
  //   getAllApplications(props.user.uid)
  //     .then((applications) => {
  //       setAllApplications(applications);
  //     })
  //     .catch((error) => {
  //       console.warn(error);
  //       window.alert(error.message);
  //     });
  // }, [props.user.uid]);

  // this effect will run when applications state changes
  useEffect(() => {
    const onSuccess = (snapshot) => {
      const updatedApplicationsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
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
                      <ApplicationFormDialogBox
                        userId={props.user.uid}
                        text='Add Application'
                      />
                    </Grid>
                  </Grid>
                </Paper>
                <Paper className={classes.paper}>
                  {allApplications
                    .filter((application) => {
                      return application.status === status.toLowerCase();
                    })
                    .map((filteredApplication) => {
                      return (
                        <Grid
                          container
                          key={filteredApplication.id}
                          item
                          xs={12}
                          className={classes.gridContainer}
                        >
                          <JobCard
                            title={filteredApplication.title}
                            company={filteredApplication.company}
                            dateApplied={filteredApplication.dateApplied}
                            jobLink={filteredApplication.jobLink}
                            status={filteredApplication.status}
                            description={filteredApplication.description}
                            userId={props.user.uid}
                            applicationId={filteredApplication.id}
                          />
                        </Grid>
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
