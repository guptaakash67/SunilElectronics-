import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css'; // Import Tailwind CSS
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);