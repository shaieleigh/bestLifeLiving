import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CreateNewAppt from './testingComponents/CreateNewAppt';
import CreateToDo from './testingComponents/CreateToDo';
import Review from './testingComponents/Review';
import Modal from '@material-ui/core/Modal';

import DeleteAppt from './testingComponents/DeleteAppt'
import DeleteToDo from './testingComponents/DeleteToDo'
import { FormHelperText } from '@material-ui/core';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Best Life Living
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3),
    },
  },
  appBarHeading: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    // marginLeft: theme.spacing(3),
    backgroundColor: 'teal',
    color: 'white',
  },
  createModal: {
    position: 'absolute',
    top: '-15px',
    left: '20%',
  },
  centerButton: {
    display: 'flex',
    justifyContent: 'center',
  },
  modalButtonBar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const steps = ['Delete Appointment', 'Delete To Do'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DeleteAppt />;
    case 1:
      return <DeleteToDo />;
    default:
      throw new Error('Unknown step');
  }
}

const handleSubmitDelete = async(step) => {
  switch (step) {
    case 0:
      await fetch('/api/appointments', {

      })

  }
}

export default function DeleteModal() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(1);
  };

  const handleBack = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.createModal}>
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar className={classes.appBarHeading}>
            <Typography variant="h4" color="inherit" noWrap>
              Demo's Best Life
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Delete
            </Typography>
            <div className={classes.modalButtonBar}>
              <Button variant='contained' onClick={handleBack}
                className={classes.button}>
                Appointment
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                className={classes.button}
                >
                To Do Thang
              </Button>
            </div>
            {/* <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper> */}
            <React.Fragment>
              {/* {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order confirmation, and will
                    send you an update when your order has shipped.
                  </Typography>
                </React.Fragment> */}
              {/* ) : ( */}
                {/* <React.Fragment> */}
                  {getStepContent(activeStep)}
                  {/* <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )} */}
                    {/* <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                      >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button> */}
                  {/* </div> */}
                {/* </React.Fragment>
              )} */}
            <div className={classes.centerButton}>
              <Button variant='contained' onClick={handleSubmitDelete}
                className={classes.button}>
                Submit New
              </Button>
            </div>
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </div>
    </React.Fragment>
  );
}
