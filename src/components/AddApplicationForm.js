import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { addApplication } from '../firebase/addApplication';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

// class AddApplicationForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log('state:,', this.state);

//     addApplication(
//       'X7piePx0YhziBYpEVsEf',
//       this.state.title,
//       this.state.company,
//       'applied'
//     );
//     getApplied('X7piePx0YhziBYpEVsEf');
//     this.props.closeForm();
//   }

//   render() {
//     //const classes = useStyles();
//     return (
//       <form
//         // className={classes.root}
//         noValidate
//         autoComplete='off'
//         onSubmit={this.handleSubmit}
//       >
//         <TextField
//           required
//           name='title'
//           id='title'
//           label='Title'
//           variant='filled'
//           color='primary'
//           onChange={this.handleChange}
//         />
//         <TextField
//           required
//           name='company'
//           id='company'
//           label='Company'
//           variant='filled'
//           color='primary'
//           onChange={this.handleChange}
//         />
//         <Fab type='submit' color='primary' aria-label='add'>
//           <AddIcon />
//         </Fab>
//       </form>
//     );
//   }
// }

export function AddApplicationForm(props) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title: ', title, 'Compnay: ', company);
    addApplication('X7piePx0YhziBYpEVsEf', title, company, 'applied');
    //getApplied('X7piePx0YhziBYpEVsEf');
    props.closeForm();
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <TextField
        required
        id='title'
        label='Title'
        variant='filled'
        color='primary'
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        required
        id='company'
        label='Company'
        variant='filled'
        color='primary'
        onChange={(event) => setCompany(event.target.value)}
      />
      <Button
        type='submit'
        color='primary'
        variant='contained'
        aria-label='add'
      >
        Save <AddIcon />
      </Button>
    </form>
  );
}

export default AddApplicationForm;
