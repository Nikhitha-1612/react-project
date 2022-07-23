import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
export class FormUserDetails1 extends Component { 
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('FirsttName')}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Date of Travelling"
              label="Date of Travelling"
              onChange={handleChange('Date of Travelling')}
              defaultValue={values.DateofTravelling}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Contact Number"
              label="Contact Number"
              onChange={handleChange('Contact Number')}
              defaultValue={values.ContactNumber} 
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Age"
              label="Age"
              defaultValue={values.Age} 
              margin="normal"
              fullWidth
            />
            <br />
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

export default FormUserDetails1;