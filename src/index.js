// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // This imports the main component that holds all your pages (Navbar, Home, About)
import './index.css';         // This imports your global CSS styles

// 1. Identify the root DOM node where the React application will be attached.
// This ID must match the <div> element inside your public/index.html file (e.g., <div id="root"></div>)
const rootContainer = document.getElementById('root');

// 2. Use createRoot to create a root instance for concurrent mode (modern React approach).
const root = ReactDOM.createRoot(rootContainer);

// 3. Render the application's root component (<App />) into the DOM.
root.render(
  // <React.StrictMode> is a helpful development tool that checks for potential problems 
  // in your code, but does not render anything visual in production.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Note: If you were using an older version of React (pre-18), the syntax would be:
// ReactDOM.render(<App />, document.getElementById('root'));