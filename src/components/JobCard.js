import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';

import EditJobCardDialogBox from './EditJobCardDialogBox';

const useStyles = makeStyles({
  root: {
    height: '180px',
    width: '300px',
    backgroundColor: 'lightBlue',
  },

  content: {
    textAlign: 'left',
  },
  title: {
    fontWeight: 'bold',
  },

  company: {
    marginBottom: 12,
    lineHeight: 1.8,
  },
});

function JobCard(props) {
  const classes = useStyles();
  const {
    title,
    company,
    dateApplied,
    jobLink,
    status,
    description,
    userId,
    applicationId,
  } = props;

  const handleLinkClick = () => {
    window.open(jobLink, '_blank');
  };

  return (
    <Card className={classes.root} variant='outlined'>
      <CardActionArea>
        <CardContent className={classes.content}>
          <Typography variant='h6' noWrap>
            {title}
          </Typography>
          <Typography
            className={classes.company}
            variant='subtitle2'
            color='textSecondary'
          >
            {company}
          </Typography>
          <Typography variant='body2' component='p'>
            {dateApplied}
          </Typography>
          <Typography>
            <Link onClick={handleLinkClick}>Go to Job Post</Link>
          </Typography>
          <EditJobCardDialogBox
            displayTitle={`${title} @ ${company}`}
            title={title}
            company={company}
            jobLink={jobLink}
            status={status}
            description={description}
            userId={userId}
            applicationId={applicationId}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default JobCard;
