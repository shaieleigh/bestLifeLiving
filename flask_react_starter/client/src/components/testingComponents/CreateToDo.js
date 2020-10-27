import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { setNewToDo, pullToDoTypes } from '../../store/assistantVirtual';

export default function CreateToDo() {
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);
  let toDos = useSelector(state => state.assistV.todos);
  let toDoTypes = useSelector(state => state.assistV.toDoTypes)
  let newToDo = useSelector(state => state.assistV.newToDo)
  console.log('toDoTypes', toDoTypes)

  const handleChangeType = async(e) => {
    e.preventDefault();
    const typeId = e.target.value
    newToDo['typeId'] = typeId
    dispatch(setNewToDo(newToDo))
  }

  const handleDate = async(e) => {
    e.preventDefault();
    newToDo['dueDate'] = e.target.value
    dispatch(setNewToDo(newToDo))
  }

  const handleItem = async(e) => {
    e.preventDefault();
    newToDo['item'] = e.target.value
    dispatch(setNewToDo(newToDo))
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputLabel id='label'>To Do Name</InputLabel>
          <Select
            required
            labelId='label'
            id="select"
            label="To Do Name"
            default={toDoTypes[0].id}
            // value={toDoTypes[0].id}
            fullWidth
            onChange={handleChangeType}
          >{toDoTypes.map(type =>
            <MenuItem key={type.id} value={type.id || ''} onClick={handleChangeType}>{type.type}</MenuItem>)}
          </Select>
          {/* <TextField required id="cardName" label="To Do List Type" fullWidth  /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="date"
            type='date'
            label="Due Date (optional)"
            InputLabelProps={{ shrink: true }}
            onChange={handleDate}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="item" label="To Do List Item" onChange={handleItem} fullWidth />
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
