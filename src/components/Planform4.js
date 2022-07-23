import React from 'react';
import {Button,TextField} from '@material-ui/core';

function Planform4(){
    return(
        <div>
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
               </div>
               </div>
        </div>
    )
}
export default Planform4;