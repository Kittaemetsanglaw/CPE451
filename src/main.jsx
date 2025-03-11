import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Custom CSS for the navy color
const style = document.createElement('style');
style.textContent = `
  :root {
    --navy-900: #0a0a33;
  }
  
  .bg-navy-900 {
    background-color: var(--navy-900);
  }
  
  .text-navy-900 {
    color: var(--navy-900);
  }
  
  .border-navy-900 {
    border-color: var(--navy-900);
  }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);