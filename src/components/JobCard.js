import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';

import LinkIcon from '@material-ui/icons/Link';

import EditJobCardDialogBox from './EditJobCardDialogBox';
import LogoAvatar from './LogoAvatar';

const useStyles = makeStyles({
  root: {
    height: '280px',
    width: '300px',
    backgroundColor: 'lightGray',
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
    location,
    salary,
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
          <LogoAvatar company={company} />
          <Tooltip title='Go to Job Post'>
            <Chip
              label={<LinkIcon />}
              onClick={handleLinkClick}
              color='primary'
              clickable
              variant='outlined'
            />
          </Tooltip>

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
            title={title}
            company={company}
            jobLink={jobLink}
            status={status}
            description={description}
            location={location}
            salary={salary}
            userId={userId}
            applicationId={applicationId}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default JobCard;
