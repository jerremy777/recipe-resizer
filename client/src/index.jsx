import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles.css';

const mountNode = document.getElementById('app');
const root = createRoot(mountNode);
root.render(<App name="Jane" />);
