import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { setEditAppt } from '../../store/assistantVirtual'

const useStyles = makeStyles((theme) => ({
  modalHidden: {
    display: 'none',
  },
}))

const values = {
  someDate: '2020-10-30'
}

export default function EditAppt() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const editAppt = useSelector(state => state.assistV.editAppt);
  let appts = useSelector(state => state.assistV.appointments);
  let apptCategories = useSelector(state => state.assistV.apptsCategories);
  let [apptsFiLi, setApptsFiLi] = useState(0);
  let [date, setDate] = useState('');
  let [time, setTime] = useState('');
  let [category, setCategory] = useState('');
  let [notes, setNotes] = useState('');
  let [editApptProto, setEditApptP] = useState(appts);
  console.log('APPTS', appts);


  const handleDate = (e) => {
    e.preventDefault();
    const date = e.target.value
    console.log('date', date, date.length)
    let newDate = date.slice(5, 7) + ' ' + date.slice(8) + ' ' + date.slice(0, 4)
    console.log('newDate', newDate, newDate.length)
    if(parseInt(date.slice(0,4)) >= 2020) {
      let apptsFiLis = editApptProto.filter(appt => appt.date.slice(2) === newDate)
      console.log ('APPTSFILIS FILTERED', apptsFiLis)

      if (apptsFiLis.length === 1) {
        setApptsFiLi(1)
        let appt = apptsFiLis[0]
        let newTime = appt.time
        let acTime = newTime.toString()
        let editedDate = appt.date.slice(8) + '-' + appt.date.slice(2, 4) + '-' + appt.date.slice(5, 7)
        console.log('EDITED DATE', editedDate)
        console.log('APPT DATE', appt.date)
        setTime(acTime);
        console.log('APPT.CATEGORY', appt.categoryId)
        setCategory(appt.categoryId)
        setNotes(appt.notes)
        setDate(editedDate)
        editAppt['apptId'] = appt.id
        dispatch(setEditAppt(editAppt))
      }
      setEditApptP(apptsFiLis)
    }
  }

  const handleTime = (e) => {

  }

  const handleCategory = (e) => {

  }

  const handleNotes = (e) => {

  }


  const handleDateChange = (e) => {
    e.preventDefault();
    const dateC = e.target.value;
    editAppt['date'] = dateC
    dispatch(setEditAppt(editAppt));
    setDate(dateC);
  }

  const handleTimeChange = (e) => {
    e.preventDefault();
    const timeC= e.target.value;
    editAppt['time'] = timeC
    dispatch(setEditAppt(editAppt));
    setTime(timeC);
  }

  const handleChangeCategory = (e) => {
     e.preventDefault();
    const categoryId = e.target.value;
    editAppt['categoryId'] = categoryId
    dispatch(setEditAppt(editAppt))
    setCategory(categoryId);

  }

  const handleNotesChange = (e) => {
    e.preventDefault();
    const notes = e.target.value
    editAppt['notes'] = notes
    dispatch(setEditAppt(editAppt))
    setNotes(notes)
  }


  let editedDate = ''
  console.log('OUTSIDE DATE', date)
  // if(date !== '') {
  //   let edited = editAppt[0];
  //   console.log('EDITED', edited)
  //   editedDate = edited.date.slice(8) + '-' + edited.date.slice(2, 4) + '-' + editAppt[0].date.slice(5, 7)
  // }
  console.log('apptsFiLi', apptsFiLi)
  console.log('editAppt', editAppt)
  console.log('TIME', time)
  console.log('EDITED DATE', editedDate)
  console.log('NOTES', notes)
  console.log('CATEGORY', category)

  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Edit Appointment
      </Typography> */}
      <div className={apptsFiLi === 1 ? classes.modalHidden : null}>
      {/* <div> */}
        <Grid container spacing={1} >
          <Grid item xs={12} sm={6}>
            <TextField
              id="date"
              name="date"
              type='date'
              label='date'
              InputLabelProps={{ shrink: true }}
              onChange={handleDate}
              defaultValue={'' || date}
              fullWidth
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type='time'
              id="time"
              name="time"
              label="Time"
              InputLabelProps={{ shrink: true }}
              inputProps={{ step: 300 }}
              fullWidth
              />
          </Grid>
          <Grid item xs={12}>
            <InputLabel id='label'>Category</InputLabel>
            <Select
              required
              labelId='label'
              id="select"
              label="Category"

              fullWidth
              onChange={handleCategory}
             >{editApptProto.map(cat =>
              <MenuItem key={cat.id} value={cat.id || ''} onClick={handleCategory}>{cat.category}</MenuItem>)}
            </Select>
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Category"
              fullWidth
              />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Notes"
              value='notes'
              fullWidth
              />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            />
          </Grid> */}
          {/* <Grid item xs={12}>
            <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
            />
          </Grid> */}
        </Grid>
      </div>
      <div className={apptsFiLi !== 1 ? classes.modalHidden : null}>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="date"
              name="date"
              type='date'
              label='date'
              // defaultValue={editedDate}
              value={date}
              InputLabelProps={{ shrink: true }}
              onChange={handleDateChange}
              fullWidth
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type='time'
              id="time"
              name="time"
              label="Time"
              value={time}
              InputLabelProps={{ shrink: true }}
              inputProps={{ step: 300 }}
              onChange={handleTimeChange}
              fullWidth
              />
          </Grid>
          <Grid item xs={12}>
          <InputLabel id='label'>Category</InputLabel>
          <Select
            required
            labelId='label'
            id="select"
            label="Category"
            value={category}
            defaultValue={category}
            // value={apptCategories[0].id}
            fullWidth
            onChange={handleChangeCategory}
          >{apptCategories.map(cat =>
            <MenuItem key={cat.id} value={cat.id || ''} onClick={handleChangeCategory}>{cat.category}</MenuItem>)}
          </Select>
        </Grid>
          <Grid item xs={12}>
            <TextField
              id="note"
              name="note"
              label="Notes"
              defaultValue={notes}
              value={notes}
              fullWidth
              onChange={handleNotesChange}
              />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
