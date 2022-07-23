import React from 'react';
 import './Aboutus.css'
 import andrei from './andrei.jpg';
 import oliver  from './oliver.jpg';
 import podvalny from './podvalny.jpg';
 import darjeeling from './darjeeling.jpg';
 import delhi from './delhi.jpg';
 import eiffelparis from './eiffelparis.jpg';
 import ganktok from './ganktok.jpg';
 import italy from './italy.jpg';
 import kerala from './kerala.jpg';
 import mysore from './MYSORE.jpg';
 import london from './london.jpg';
 import ooty from './ooty.jpg';
//  import switerland from './Switerland.jpg'
 
 function  Aboutus(){
     return(
         <div>
             <div className="container3">
        {/* <img src={ image3} alt="Mountains" width="100%"></img> */}
        <img src={ oliver} alt="Mountains" width="100%"></img>
        <img src={ podvalny} alt="Mountains" width="100%"></img>
        <img src={ andrei} alt="Mountains" width="100%"></img>
        <div className="bottom-right">
            <h1>Explore the world!!</h1>
        <h2>Travel with pride</h2></div>
             </div>
             <div className="text3">
              <h2>Vistiors are provided with various <br />range of choices and wide  range of<br /> collections 
              and  attracations </h2>
             </div>
             <div className="text5">
               <h1>checkout these epic destinations</h1>
               <div >
                 <div className="row4" >
                   <div className="column4">
               <img src={darjeeling} alt=" " className="img-des" /> 
               <h1>darjeeling</h1>
               </div>
               <div className="column4">
               <img src={ delhi} alt=""  className="img-des"/>    
               <h1>Delhi</h1>
               </div>
               <div className="column4">
              <img src={eiffelparis} alt=" " className="img-des" />
              <h1>Paris</h1>
              </div>

              <div className="column4"> 
              <img src={ mysore} alt=""  className="img-des"/>
              <h1>Mysore</h1>
              </div>
              <div className="column4">
              <img src={ooty} alt=""  className="img-des"/>
              <h1>ooty</h1>
              </div>
              <div className="column4">
              <img src={london} alt="" className="img-des" />
              <h1>london</h1>
              </div>
              <div className="column4">
              <img src={ganktok} alt="" className="img-des" /> 
              <h1>ganktok</h1>
              </ div>
              <div className="column4">
              <img src={italy} alt="" className="img-des"/>
              <h1>Italy</h1>
              </div>
              <div className="column4">
              <img src={kerala} alt="" className="img-des"/>
              <h1>Kerala</h1>
              </div>
              {/* <div className="column4">
              <img src={switerland} alt=""  className="img-des"/>
              <h1>Swizterland</h1>
              </div> */}
              </div>
              </div>
             </div>
             <div className="column6">
               <h1>Free Cancellation</h1>
               <h3>You'ii recieve a  full refund  if you cancel <br /> 
               atleast 24 hours in advance of most <br />
               experiences</h3>
             </div>
            
           <div className="text1">
              <h1>Why Book with Vacanza??</h1>
              <div>
              <div className="row1">
            <div className="column1">
          <h3>Amazing  Experience</h3>
          <p>Browse and book tours ,<br />and activities so incredible,<br /> you’ll want to tell your friends. </p>
          </div>
    
        <div className="column1">
        <h3>Ultimate flexbility</h3>
        <p>You can cancel the ticket <br /> and change the plan whenever<br /> you need without any charge</p>
         </div>
         
        <div className="column1">
        <h3>24/7 service</h3>
        <p>We will help you with < br/>whatever you want..<br />you can reach us anytime</p>
        </div>
         
        <div className="column1">
        <h3>A wide range of choices </h3>
        <p>High standards.Million of<br /> reviews.You are provided < br />with wide range of choices</p>
        </div>
         </div>
         <div className="column2">
          <h1>Affordable price</h1>
          <h4>Price are buget friendly.<br />
          Use Reserve Now & Pay Later to<br />
           secure the activities you don't <br />
           want to miss without being locked in.
          
          </h4>

        </div>
         
         </div>
              </div>
           </div>


       
     )
 }

 export default Aboutus;