import React from 'react'
import styled from 'styled-components';
import HeroSlider from '../components/HeroSlider';
import Welcome from '../components/Welcome';

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
`;
const Home = () => {
  return (
    <HomeContainer>
      <HeroSlider />
      <Welcome />
    </HomeContainer>
  )
}

export default Home