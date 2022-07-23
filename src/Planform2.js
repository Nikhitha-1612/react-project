import React from 'react';
import {Button,TextField} from '@material-ui/core';

function Planform2(){
    return(
     < div>
      < div>
      <h2>Contact Information</h2>
      <TextField label="Email" margin="normal" variant="outlined" color="secondary " />
  </div>
  <div>
  <TextField label="phone number" margin="normal" variant="outlined" color="secondary " />
  </div>
  <div>
  <TextField  label="address"
   margin="normal" variant="outlined" color="secondary " />
  </div>
  <div>
      <Button variant="contained" color="primary">Next</Button>
  </div>
  </div>
    )
}
export default Planform2;