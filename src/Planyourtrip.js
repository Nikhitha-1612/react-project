import React,{useState} from 'react';
import image1 from './plan2.jpg'
import './Planyourtrip.css';
import  image4 from './family3.jpg';
 import  image5 from './beachhoilday.jpg';
 import  image6 from './climbing-rock.jpg';
 import image7 from './city_break.jpg';
 import image8 from './romanticgateway.jpg';
 import './Planfrom';
 import Plan from './plan6.jpg';
 import passport from './passport8.jpg'
 import { Button} from '@material-ui/core'
 import Stepcount from './components/Stepcount'
 
//  import StepContext from './components/Stepcontext';



function Planyourtrip(){
  const[click,setClick]=useState(false)
    return(
        <div>
          <div className="container">
          <img src={image1} alt=" "  width="100%"></img>
          <div className="bottom-right">
           <h1> Looking for the Hoilday</h1>
           <h2>Then you are at the right place</h2>
          </div>
          </div>
             <div className="text2">
                <h1>Things to do</h1>
             </div>
           <div className="column">
            <img src={image6} alt=" "></img>
            <img src= {image4} alt=" "></img>
            <img src={image7} alt=" "></img>
            <img src={ image8} alt=" "></img>
           </div>
           <div>
           <img id="cave" src={ image5} alt=" "></img>
           </div>
           <div className="card1">
           <div className="plan">
             <img src={Plan} alt=" "></img>
           </div>
           <div className="text7">
           <h1>Plan your trip right away.<br />To plan your trip Click here!!</h1>
           <div className="butto">
    <Button onClick={()=>{setClick(!click)}} variant="contained" color="secondary">Click here</Button>
    {click && <Stepcount/>}
    </div>
           </div>
           </div>
           <div className="card2">
           <div className-="text6">
             <h2>you don't have the passport ..<br />
             Then apply for the passport  by clicking here!!
               <a href= "https://www.passportindia.gov.in/AppOnlineProject/welcomeLink#" /></h2>
               <p class="w3-medium">Powered by <a href= "https://www.passportindia.gov.in/AppOnlineProject/welcomeLink#" target="_blank">vancanza.com</a></p>
               </div>
               <div className="pass1">
             <img src={passport} alt=" "></img>
           </div>
               </div>
        </div>
    )
}
export default Planyourtrip;