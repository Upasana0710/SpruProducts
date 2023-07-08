import React, { useState, useEffect, useRef } from 'react';
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
  max-width: 100%;
  overflow: hidden;
`;

const SlideshowImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  animation: ${props => (props.isActive ? slideIn : slideOut)} 1s ease-in-out;
`;

const HeroSlider = () => {
  const images = [data.hero.heroimage1, data.hero.heroimage2, data.hero.heroimage3];
  const [activeIndex, setActiveIndex] = useState(0);
  const slideshowRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the duration between transitions (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const setContainerHeight = () => {
      const activeImage = slideshowRef.current.querySelector('.active');
      if (activeImage) {
        slideshowRef.current.style.height = `${activeImage.clientHeight}px`;
      }
    };

    window.addEventListener('resize', setContainerHeight);
    setContainerHeight();

    return () => {
      window.removeEventListener('resize', setContainerHeight);
    };
  }, []);

  return (
    <SlideshowContainer ref={slideshowRef}>
      {images.map((image, index) => (
        <SlideshowImage
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          isActive={index === activeIndex}
          className={index === activeIndex ? 'active' : ''}
        />
      ))}
    </SlideshowContainer>
  );
};

export default HeroSlider;