import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { setEditToDo } from '../../store/assistantVirtual';
// import { ListItemSecondaryAction } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modalHidden: {
    display: 'none',
  },
}))

export default function CreateToDo() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const editToDo = useSelector(state => state.assistV.editToDo);
  const todos = useSelector(state => state.assistV.toDos);
  const toDoTypes = useSelector(state => state.assistV.toDoTypes)
  let [todoFilteredList, setFilteredList] = useState(0);
  let [toDoType, setType] = useState('');
  let [toDoItem, setItem] = useState('');
  let [editToDoProto, setEditToDoP] = useState(todos);
  // let [toDoTypeArr, setToDoArr] = useState([]);
  let [changeItem, setChIt] = useState('');
  let [changeType, setChType] = useState('');

  const handleReset = (e) => {
    setEditToDoP(todos)
  }

  const handleChangeItem = (e) => {
    e.preventDefault();
    let item = e.target.value;
    editToDo['item'] = item;
    dispatch(setEditToDo(editToDo))
    setChIt(item);
  }

  const handleChangeType = (e) => {
    e.preventDefault();
    let type = e.target.value;
    editToDo['typeId'] = type;
    dispatch(setEditToDo(editToDo))
    setChType(type);
  }


  const handleToDoType = (e) => {
    e.preventDefault();
    let toDoType = e.target.value
    console.log(toDoType)
    let toDoFilters = editToDoProto.filter(todo => toDoType === todo.typeId)
    if(toDoFilters.length === 1) {
      // type
      setFilteredList(1)
      setType(toDoFilters[0].typeId)
      setItem(toDoFilters[0].item)
      editToDo['typeId'] = toDoFilters[0].typeId
      dispatch(setEditToDo(editToDo))
    }
    console.log('TODOFILTERS', toDoFilters)
    setEditToDoP(toDoFilters)
  }

  console.log('EDITTODOPROTO', editToDoProto)
  console.log('TODOTYPE', toDoType)
  console.log('TODOITEM', toDoItem)
  console.log('TODOS', todos)

  const handleToDoItem = (e) => {
    e.preventDefault();
    // let item = e.target.value

  }

  return (
    <React.Fragment>
      <div className={todoFilteredList === 1 ? classes.modalHidden : null}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <InputLabel id='label'>To Do Name</InputLabel>
            <Select
              required
              labelId='label'
              id="select"
              label="To Do Name"
              default={toDoTypes[0].id}
              onChange={handleToDoType}

              fullWidth

              >{toDoTypes.map(type =>
                <MenuItem key={type.id} value={type.id || ''} onClick={handleToDoType}>{type.type}</MenuItem>)}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="due date"
              label="Due Date (optional)"
              fullWidth
              />
          </Grid>
          <Grid item xs={12}>
            <InputLabel id='label'>To Do Item</InputLabel>
              <Select
                required
                labelId='label'
                id="select"
                label="To Do Item"
                fullWidth
                onChange={handleToDoItem}
                >{editToDoProto.map(todo =>
                  <MenuItem key={todo.id} value={todo.id || ''} onClick={handleReset}>{todo.item}</MenuItem>)}
              </Select>
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
      </div>
      <div className={todoFilteredList !== 1 ? classes.modalHidden : null}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <InputLabel id='label'>To Do Name</InputLabel>
            <Select
              required
              labelId='label'
              id="select"
              label="To Do Name"
              default={toDoTypes[0].id}
              onChange={handleChangeType}
              value={toDoType}
              fullWidth
              >{toDoTypes.map(type =>
                <MenuItem key={type.id} value={type.id || ''} onClick={handleChangeType}>{type.type}</MenuItem>)}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="due date"
              label="Due Date (optional)"
              fullWidth
              />
          </Grid>
          <Grid item xs={12}>
            <InputLabel id='label'>To Do Item</InputLabel>
              <TextField

                labelId='label'
                id="items"
                name='items'
                fullWidth
                onChange={handleChangeItem}
                value={toDoItem}
                defaultValue={toDoItem}

              />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
