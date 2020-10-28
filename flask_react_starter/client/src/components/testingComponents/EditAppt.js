import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { setEditAppt } from '../../store/assistantVirtual'

const useStyles = makeStyles((theme) => ({
  modalHidden: {
    display: 'none',
  },
}))


export default function EditAppt() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const editAppt = useSelector(state => state.assistV.editAppt);
  let appts = useSelector(state => state.assistV.appointments);

  let apptsFiLi = [];

  const handleDate = (e) => {
    e.preventDefault();
    const date = e.target.value
    console.log('date', date, date.length)
    let newDate = date.slice(5, 7) + ' ' + date.slice(8) + ' ' + date.slice(0, 4)
    console.log('newDate', newDate, newDate.length)
    if(parseInt(date.slice(0,4)) >= 2020) {
      appts.forEach(appt => {
        console.log('APPT.DATE', appt.date.slice(2), appt.date.length)
        if(appt.date.slice(2) === newDate) {
          apptsFiLi.push(appt)
        }
      })
      if (apptsFiLi.length === 1) {
        dispatch(setEditAppt(apptsFiLi))
      }
    }
  }
  console.log('apptsFiLi', apptsFiLi)

  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Edit Appointment
      </Typography> */}
      <div className={apptsFiLi.length === 1 ? classes.modalHidden : null}>
        <Grid container spacing={1} className={apptsFiLi.length === 1 ? classes.modalHidden : null}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="date"
              name="date"
              type='date'
              label='date'
              InputLabelProps={{ shrink: true }}
              onChange={handleDate}
              default={appts[0].date || ''}
              fullWidth
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Time"
              fullWidth

              />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Category"
              fullWidth
              // autoComplete="shipping address-line1"
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
      </div>
    </React.Fragment>
  );
}
