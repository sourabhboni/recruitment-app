import React from 'react';
import Pic4 from '../assets/pic4.jpg';
import { Container } from 'react-bootstrap';

const CareerPage = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${Pic4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        overflow: 'hidden',
      }}
    >
      {/* Semi-transparent overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(46, 44, 44, 0.38)', // Adjust the transparency here
          zIndex: 1,
        }}
      ></div>

      {/* Centered content */}
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h1 style={{ color: '#fff', textAlign: 'center' }}>Careers</h1>
      </Container>
    </div>
  );
};

export default CareerPage;
