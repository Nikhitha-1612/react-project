import React from 'react';
import {Button,TextField} from '@material-ui/core';
import './Planfrom.css'

function Planfrom(){
    return(
        <div>
          
            <h1>Personal Information</h1>
            <div>
           <TextField label="First Name" margin="normal" variant="outlined" color="secondary " />
           </div>
           <div>
           <TextField label="Last Name" margin="normal" variant="outlined" color="secondary " />
           </div>
           <div>
           <TextField 
           type="date" margin="normal" variant="outlined" color="secondary " />
           </div>
           <div>
           <TextField label="age"  variant="outlined" color="secondary" />
           </div>
           <div>
               <Button variant="contained" color="primary">Next</Button>
           </div>
           {/* <div>
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
            <div>
            
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div>
            <h3>Payment</h3>
            <label >Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" ></i>
              <i className="fa fa-cc-amex" ></i>
              <i className="fa fa-cc-mastercard"></i>
              <i className="fa fa-cc-discover"></i>
            </div>
            <div> 
              <div>
              <TextField label="Name on the card" margin="normal" variant="outlined" color="secondary " />
              </div>
              <div>
              <TextField label="Credit card Number" margin="normal" variant="outlined" color="secondary " />
              </div>
              <div>
              <TextField label="Exp month" margin="normal" variant="outlined" color="secondary " />
              </div>
              <div>
              <TextField label="CVV" margin="normal" variant="outlined" color="secondary " />
              </div>
              <div>
              <TextField label="Exp year" margin="normal" variant="outlined" color="secondary " />
              </div>
              <div>
                <Button   variant="contained" color="primary">Submit</Button>
              </div>
            </div>
            </div> */}
        {/* <label>
          <input type="checkbox" > Shipping address same as billing</input>
        </label>
        <input type="submit"  className="btn" /> */}
  
           </div>
          
          
           
    )
}

export default Planfrom;