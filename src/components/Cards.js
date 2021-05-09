import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { getApplied } from '../firebase/getApplied';

const useStyles = makeStyles({
  root: {
    minWidth: 290,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  gridContainer: {
    marginLeft: '20px',
    marginRight: '20px',
  },
});

function Cards() {
  const classes = useStyles();

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getApplied('X7piePx0YhziBYpEVsEf')
      .then((results) => {
        setApplications(results);
      })
      .catch((error) => {
        console.warn(error);
        window.alert(error.message);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {applications.map((jobCard, index) => (
        <Grid key={index} item xs={12}>
          <Card className={classes.root} variant='outlined'>
            <CardActionArea>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  {jobCard.title}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                  {jobCard.company}
                </Typography>
                <Typography variant='body2' component='p'>
                  {jobCard.timeStamp}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;
