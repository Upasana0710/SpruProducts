import React from 'react'
import styled from 'styled-components';
import HeroSlider from '../components/HeroSlider';
import Welcome from '../components/Welcome';
import Choose from '../components/Choose';

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
`;
const Home = () => {
  return (
    <HomeContainer>
      <HeroSlider />
      <Welcome />
      <Choose />
    </HomeContainer>
  )
}

export default Home