import React from 'react';
// import image from './image5.jpg';
import './Home.css';
import Cards from './Cards';
import Services from './Services';
import video from './videosnow.mp4';


function Home(){
    return(
        <div className="container">
          {/* <img  src={image} alt=" "></img> */}
        <video className="video1" autoPlay loop muted>
        <source src={video} type="video/mp4"/>
        </video>
          <div className="matter">
          <h1> Explore the world beyond!!</h1>
          <h2>Ready to Answer the wild call??</h2>
          <h3>What are you waiting for??</h3>
          <button className="button"  >Explore more</button>
          </div>
          <div className="things">
              <h1>Top Desinations</h1>
          </div>
          <div>
              <Cards />
          </div>
          
          {/* <link rel="stylesheet" href="/w3css/3/w3.css"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"></link>
          <div className="footer">
          <footer class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
  <i class="fa fa-facebook-official w3-hover-opacity"></i>
  <i class="fa fa-instagram w3-hover-opacity"></i>
  <i class="fa fa-snapchat w3-hover-opacity"></i>
  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
  <i class="fa fa-twitter w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
  <p class="w3-medium">Powered by <a href="https://www.vancanza.com" target="_blank">vancanza.com</a></p>
</footer>
          </div>
          <div>
          <i className="fa fa-instagram"></i>
          </div> */}
        </div>
    )
}
export default Home;