import React,{useState} from 'react';
import './Services.css';
import { UserForm } from './components/UserForm';
import { Button} from '@material-ui/core'
import Servicesimg from './servicesimg.jpg'
import penthouse from './penthouse.jpg';
import single from './single.jpg';
import luxury from './luxurysuite.jpg';
import double from './doublesharing.jpg';

function Services(){
    const[click,setClick]=useState(false)
    return(
        <div>
            <div className="service">
                <img src={Servicesimg} alt=" "></img>
            </div>
            <div>
                <div className="matter2">
                <h1>Type of accomdations</h1>
                </div>
                <div className="responsive">
            <div className="gallery">
         <img src={penthouse} alt=" " width="100%"></img>
         <div className="desc1">penthouse</div>
         </div>
         </div>
                <div className="responsive">
            <div className="gallery">
         <img src={luxury} alt=" " width="100%"></img>
         <div className="desc1">luxury-suite</div>
         </div>
         </div>
         <div className="responsive">
            <div className="gallery">
         <img src={single} alt=" " width="100%"></img>
         <div className="desc1">Single room sharing</div>
         </div>
         </div>
         <div className="responsive">
            <div className="gallery">
         <img src={double} alt=" " width="100%"></img>
         <div className="desc1">Double Room Sharing</div>
         </div>
         </div>
            </div>
             <div className="colum">
                 <div className="matter3">
                  <h1>24/7 Service</h1>
                  </div>
                  <h3>We are happy to serve you<br />
                  We will provide you with whatever <br />
                  you need.We provide  everything <br />
                  we provide  breakfast</h3>
              </div>
              <div className="matter2">
                  <h1>Book your room right now.</h1>
                  <h1>We will help you</h1>
                  <h3>
                      We will book the room .All you need is<br />
                       fill the form below and tell us about your <br/>
                       prorities according to accomadation.we will <br />
                       book the room according to your prorities<br/>
                       Click here to fill the form
                      </h3>
                      <div className="butto">
    <Button onClick={()=>{setClick(!click)}} variant="contained" color="secondary">Click here</Button>
    {click && <UserForm/>}
    </div>
              </div>
           
        </div>
    )
}
export default Services;