import React from 'react';
import { createRoot } from 'react-dom/client';
import './styleSheets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const app = createRoot(container);

app.render(
 <React.StrictMode>
  <Router>
   <App />
  </Router>
 </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
