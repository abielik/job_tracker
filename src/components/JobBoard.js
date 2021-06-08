import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
    width: 350,
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
  const [cardState, setCardState] = useState({
    applied: {
      title: 'Applied',
      items: [],
    },
    interviewing: {
      title: 'Interviewing',
      items: [],
    },
    rejected: {
      title: 'Rejected',
      items: [],
    },
  });

  // function handleOnDragEnd(result) {
  //   const jobCardsArray = Array.from(jobCards);
  //   // removing from array
  //   const [reorderedJobCards] = jobCardsArray.splice(result.source.index, 1);
  //   // adding the copy at new location without deleting anything
  //   jobCardsArray.splice(result.destination.index, 0, reorderedJobCards);

  //   moveJobCards(jobCardsArray);
  // }

  const handleOnDragEnd = ({ destination, source }) => {
    console.log('from, ', source);
    console.log('to ,', destination);
    if (!destination) {
      console.log('not dropped in droppable');
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      console.log('droppped in same place');
      return;
    }

    const cardCopy = { ...cardState[source.droppableId].items[source.index] };
    setCardState((prev) => {
      prev = { ...prev };
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1);
      //adding to new items array location
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        cardCopy
      );

      return prev;
    });
  };

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
      <DragDropContext onDragEnd={handleOnDragEnd}>
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

                  <Droppable droppableId={status.toLowerCase()}>
                    {(provided) => (
                      <Paper
                        className={classes.paper}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {allApplications
                          .filter((application) => {
                            return application.status === status.toLowerCase();
                          })
                          .map((filteredApplication, index) => {
                            return (
                              <Draggable
                                key={filteredApplication.id}
                                draggableId={filteredApplication.id}
                                index={index}
                              >
                                {(provided) => (
                                  <Grid
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    container
                                    item
                                    xs={12}
                                    className={classes.gridContainer}
                                  >
                                    <JobCard
                                      title={filteredApplication.title}
                                      company={filteredApplication.company}
                                      dateApplied={
                                        filteredApplication.dateApplied
                                      }
                                      jobLink={filteredApplication.jobLink}
                                      status={filteredApplication.status}
                                      description={
                                        filteredApplication.description
                                      }
                                      location={filteredApplication.location}
                                      salary={filteredApplication.salary}
                                      userId={props.user.uid}
                                      applicationId={filteredApplication.id}
                                      cardColor={filteredApplication.cardColor}
                                    />
                                  </Grid>
                                )}
                              </Draggable>
                            );
                          })}
                        {provided.placeholder}
                      </Paper>
                    )}
                  </Droppable>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </DragDropContext>
    </Grid>
  );
}

export default JobBoard;
