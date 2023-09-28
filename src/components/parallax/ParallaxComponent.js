import React from 'react'
import './ParallaxComponent.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const ParallaxComponent = () => {
    return (
      <ParallaxProvider>
        <div className="parallax-container">
          <Parallax className="parallax-image" y={[-20, 20]}>
            <div className="parallax-image-inner"></div>
          </Parallax>
          <div className="parallax-content">
            <h1>POUZDANA DISTRIBUCIJA</h1>
            <p>Nešto dodatnog teksta.</p>
          </div>
        </div>
      </ParallaxProvider>
    );
  };

export default ParallaxComponent