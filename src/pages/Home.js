import React from 'react'
import styled from 'styled-components';
import HeroSlider from '../components/HeroSlider';
import Welcome from '../components/Welcome';
import Choose from '../components/Choose';
import Products from '../components/Products';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';

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
        <Products />
        <Industries />
      <Testimonials />
    </HomeContainer>
  )
}

export default Home