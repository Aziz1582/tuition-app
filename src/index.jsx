import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Find the <div id="root"> in public/index.html
const container = document.getElementById('root');
const root = createRoot(container);

// Render your App component
root.render(<App />);

