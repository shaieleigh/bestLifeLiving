import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { setEditToDo } from '../../store/assistantVirtual';

const useStyles = makeStyles((theme) => ({
  modalHidden: {
    display: 'none',
  },
}))

export default function CreateToDo() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const editAppt = useSelector(state => state.assistV.editAppt);
  const todos = useSelector(state => state.assistV.toDos);

  const handleDate = (e) => {
    e.preventDefault();
    todos = todos.filter(todo => todo.date === e.target.value)
  }

  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Edit To Do
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="To Do List Type" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cardNumber"
            label="Due Date (optional)"
            fullWidth
            // autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="expDate" label="To Do List Item" fullWidth autoComplete="cc-exp" />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="Notes"
            // helperText="Last three digits on signature strip"
            fullWidth
            // autoComplete="cc-csc"
          />
        </Grid> */}
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
