import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Aboutus from './Aboutus';
import Services from './Services';
import Signup from './Signup';
import Planyourtrip from './Planyourtrip';
import Home from './Home';
import Login from './Login';




function App() {
  return (
    <Router>
   <div>
      <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/aboutus">Aboutus</Link>
         </li>
         <li>
           <Link to="/services">Services</Link>
         </li>
         <li>
           <Link to="/planyourtrip">Plan yout trip</Link>
         </li>
         <li>
           <Link to="/signup">Signup</Link>
         </li>
         <li>
           <Link to="/login">Login</Link>
         </li>
      </ul>
      <Switch>
      <Route path="/login"><Login /></Route>
      <Route path="/Planyourtrip"><Planyourtrip/></Route>
        <Route path="/aboutus"><Aboutus/></Route>
        <Route path="/services"><Services/></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
