import React from 'react';
import {Button,TextField} from '@material-ui/core';

function Planform3(){
    return(
        <div>
<div>
               <h1>Personal Priorties</h1>
               <div>
                   <TextField label="Destination to"  margin ="normal" variant="outlined" color="secondary" />
               </div>
               <div>
                  <TextField label="Date" type="date"  margin ="normal" variant="outlined" color="secondary" />
               </div>
               <div>
               <TextField label="mode of travelling"  margin ="normal" variant="outlined" color="secondary" />
               </div>
               <TextField label="type of trip" margin="normal" variant="outlined" color="secondary" />
           </div>
           <div>
               <Button variant="contained" color="primary">Next</Button>
           </div>
        </div>
    )
}
export default Planform3;