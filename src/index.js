import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDom.createRoot tells React to prepare that HTML element as the place where your React application will be displayed. 
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render tells React what to display inside the root element we just prepared.
root.render(
  // <App /> looks like HTML, but it allows us to describe React components in our JavaScript code.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
