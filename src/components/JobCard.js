import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    // minWidth: 290,
    justifyContent: 'space-between',
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
  const { title, company, dateApplied, jobLink } = props;

  const preventDefault = (event) => event.preventDefault();
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
            {dateApplied}
          </Typography>
          <Typography>
            <Link href={jobLink} onClick={preventDefault}>
              Go to Job Post
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default JobCard;
