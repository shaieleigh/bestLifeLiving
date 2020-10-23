import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import { TimePicker } from "material-ui-time-picker";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { pullAppointmentCats, pullAppointments, cNAFormChange } from '../../store/assistantVirtual';


export default function CreateNewAppt() {

  const dispatch = useDispatch();
  const appointments = useSelector(state => state.assistV.appointments.appointments);
  let apptCategories = useSelector(state => state.assistV.apptsCategories);
  let newAppointment = useSelector(state=> state.assistV.newAppointment);



  const handleChangeCategory = async(e) => {
    e.preventDefault();
    const categoryId = e.target.value
    newAppointment['categoryId'] = categoryId
  }

  const handleDate = async(e) => {
    e.preventDefault();
    newAppointment['date'] = e.target.value
  }

  const handleTime = async(e) => {
    e.preventDefault();
    newAppointment['time'] = e.target.value

  }
  const handleNotes = async(e) => {
    e.preventDefault();
    newAppointment['notes'] = e.target.value
  }


  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Create New Appointment
      </Typography> */}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <InputLabel id='label'>Category</InputLabel>
          <Select
            required
            labelId='label'
            id="select"
            label="Category"
            default='doctor'
            fullWidth
            onClick={handleChangeCategory}
          >{apptCategories.map(cat =>
            <MenuItem key={cat.id} value={cat.id || ''} onClick={handleChangeCategory}>{cat.category}</MenuItem>)}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fullname"
            name="date"
            type='date'
            label='date'
            InputLabelProps={{ shrink: true }}
            fullWidth
            onChange={handleDate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type='time'
            id="time"
            name='time'
            label="Time"
            fullWidth
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 300 }}
            onChange={handleTime}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Notes"
            fullWidth
            onChange={handleNotes}
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
    </React.Fragment>
  );
}
