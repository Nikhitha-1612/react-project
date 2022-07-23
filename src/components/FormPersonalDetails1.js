import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
export class FormPersonalDetails1 extends Component { 
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render(){ 
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('Email')}
              defaultValue={values.Email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Mode of Transportation"
              label="Enter Mode of Transportation"
              onChange={handleChange('Mode of Transportation')}
              defaultValue={values.ModeofTransportation}
              margin="normal"
              fullWidth 
            />
            <br />
            <TextField
              placeholder="Enter Type of Trip"
              label="Enter Type of Trip "
              onChange={handleChange('Type of Trip')}
              defaultValue={values.TypeofTrip}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Mode Of Payment"
              label="Enter Mode Of Payment "
              onChange={handleChange('Mode Of Payment')}
              defaultValue={values.ModeOfPayment}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails1;