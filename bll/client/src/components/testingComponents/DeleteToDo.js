import React from 'react';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

export default function CreateToDo() {
  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Delete To Do
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="To Do List Type" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
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
