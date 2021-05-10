import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

function JobCard(props) {
  const classes = useStyles();
  const { title, company, timeStamp } = props;
  return (
    <Card className={classes.root} variant='outlined'>
      <CardActionArea>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            {company}
          </Typography>
          <Typography variant='body2' component='p'>
            {timeStamp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default JobCard;
