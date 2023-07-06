import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import data from '../data.json';

const slideOut = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const SlideshowContainer = styled.div`
  position: relative;
  height: 720px;
  overflow: hidden;
`;

const SlideshowImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.isActive ? 1 : 0)};
  animation: ${props => (props.isActive ? slideIn : slideOut)} 1s ease-in-out;
`;

const HeroSlider = () => {
  const images = [data.heroimage1, data.heroimage2, data.heroimage3];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the duration between transitions (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <SlideshowContainer>
      {images.map((image, index) => (
        <SlideshowImage
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          isActive={index === activeIndex}
        />
      ))}
    </SlideshowContainer>
  );
};

export default HeroSlider;
