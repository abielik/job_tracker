import React, { useState, useEffect } from 'react';

import JobCard from './JobCard';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';

import { getAllApplications } from '../firebase/getAllApplications';
import AddApplicationForm from './AddApplicationForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 700,
    width: 300,
  },
  formBody: {
    width: 400,
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function JobBoard() {
  const classes = useStyles();
  const jobStatuses = ['Applied', 'Interviewing', 'Rejected'];
  const [allApplications, setAllApplications] = useState([]);
  const [openApplicationForm, setOpenApplicationForm] = useState(false);

  const handleOpenApplicationForm = () => {
    setOpenApplicationForm(true);
  };

  const handleCloseApplicationForm = () => {
    setOpenApplicationForm(false);
  };

  const body = (
    <div className={classes.formBody}>
      <AddApplicationForm closeForm={handleCloseApplicationForm} />
    </div>
  );

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
          <Modal
            open={openApplicationForm}
            onClose={handleCloseApplicationForm}
          >
            {body}
          </Modal>
          {jobStatuses.map((status, index) => {
            return (
              <Grid item key={index}>
                <Paper className={classes.paper}>
                  {status}
                  <Grid>
                    <Button
                      color='primary'
                      variant='contained'
                      onClick={handleOpenApplicationForm}
                    >
                      Add Application <AddIcon />
                    </Button>
                  </Grid>

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
