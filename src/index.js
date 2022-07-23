import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as ServiceWorker from './ServiceWorker';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode> 
    <App />
 
   </React.StrictMode>,
  document.getElementById('root')
);

ServiceWorker.unregister();
reportWebVitals();
