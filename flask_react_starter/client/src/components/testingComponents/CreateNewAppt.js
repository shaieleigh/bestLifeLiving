import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { pullAppointmentCats, pullAppointments } from '../../store/assistantVirtual';


export default function CreateNewAppt() {

  const dispatch = useDispatch();
  const appointments = useSelector(state => state.assistV.appointments.appointments);
  const apptCategories = useSelector(state => state.assistV.appointments.categories);
  console.log(appointments, apptCategories);

  useEffect(() => {
        dispatch(pullAppointments());
        // dispatch(pullAppointmentCats());
      }, []);

  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Create New Appointment
      </Typography> */}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Select
            required
            id="address1"
            name="address1"
            label="Category"
            fullWidth
            // autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Date"
            fullWidth
            // autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Time"
            fullWidth
            // autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Notes"
            fullWidth
            // autoComplete="shipping address-line2"
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
