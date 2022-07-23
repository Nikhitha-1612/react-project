import React from 'react';
import image from './image6.jpg';
import './Cards.css';
import maldives3 from './maldives3.jpg';
import Rajathan from './Rajasthan.jpg';
import Japan from './Japan.jpg';
import Thailand from './Thailand.jpg';
import dubai from './dubai.jpg';
import goa  from './goa.jpg';
import jesuisland from './jesuisland.jpg';
import Tajmahal from './Tajmahal.jpg';
import switerland from './Switerland.jpg'
import Newdelhi from './HumayunsTomb.jpg';
import newyork from './newyork.jpg';
// 'images/img-2.jpg

function Cards(){
    return(
       <div>
        <div className="responsive">
            <div className="gallery">
         <img src={image} alt=" " width="100%"></img>
         <div className="desc1">Seoul</div>
         </div>
         </div>

         
       <div className="responsive">
            <div className="gallery">
         <img src={Rajathan} alt=" " width="100%"></img>
         <div className="desc1">Rajasthan</div>
         </div>
         </div>        
        <div className="responsive">
            <div className="gallery">
         <img src={dubai} alt=" " width="100%"></img>
         <div className="desc1">Dubai</div>
         </div>
         </div>

         <div className="responsive">
            <div className="gallery">
         <img src={goa} alt=" " width="100%"></img>
         <div className="desc1">Goa</div>
         </div>
         </div>
         <div className="responsive">
            <div className="gallery">
         <img src={maldives3} alt=" " width="100%"></img>
         <div className="desc1">maldives</div>
         </div>
         </div>
         <div className="responsive">
            <div className="gallery">
         <img src={jesuisland} alt=" " width="100%"></img>
         <div className="desc1">Jeju Island</div>
         </div>
         </div>
        
         <div className="responsive">
            <div className="gallery">
         <img src={Japan} alt=" " width="100%"></img>
         <div className="desc1">Tokyo</div>
         </div>
         </div>

         <div className="responsive">
            <div className="gallery">
         <img src={Thailand} alt=" " width="100%"></img>
         <div className="desc1">Bangkok</div>
         </div>
         </div>
         
         <div className="responsive">
            <div className="gallery">
         <img src={switerland} alt=" " width="100%"></img>
         <div className="desc1">Swizterland</div>
         </div>
         </div>
         <div className="responsive">
            <div className="gallery">
         <img src={newyork} alt=" " width="100%"></img>
         <div className="desc1">New york</div>
         </div>
         </div>
 
        <div className="responsive">
            <div className="gallery">
         <img src={Newdelhi} alt=" " width="100%"></img>
         <div className="desc1">New Delhi</div>
         </div>
         </div>

         

</div>        
     
    )
}
export default Cards;