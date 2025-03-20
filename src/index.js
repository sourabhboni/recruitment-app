import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

preloadImages([
  '/assets/team.jpg',
  '/assets/mission.jpg',
  '/assets/vision.jpg',
  '/assets/values.jpg',
  '/assets/logo.png',
  '/assets/success.jpg',
]);
