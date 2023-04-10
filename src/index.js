import React from 'react';
ReactDOM.render(<App />, document.getElementById('root'));
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import 'bootstrap/dist/js/bootstrap.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <p>Hello</p>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
