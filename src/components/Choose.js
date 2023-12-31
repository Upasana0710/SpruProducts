import React, {useState, useEffect} from "react";
import styled, { keyframes } from "styled-components";
import data from "../data.json";

const animateBackground = keyframes`
  0% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;
const ChooseContainer = styled.div`
  width: 100%;
  height: 500px;
  @media (max-width: 1240px) {
    height: auto;
  }
`;

const GradientBackground = styled.div`
background: linear-gradient(76.08deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
url(${data.choose.bannerImage});
  height: 70%;
  width: 100%;
  opacity: 0.9;
  @media (max-width: 700px) {
    height: 60%;
  }
`;

const WhiteBackground = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 20px 0px;
`;

const Heading = styled.div`
  font-size: 36px;
  font-weight: 540;
  text-align: center;
  color: ${({ theme }) => theme.bg};
  margin-top: 80px;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.bgLight};
  max-width: 700px;
  line-height: 24px;
  margin: 40px 0px;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  @media (max-width: 1000px) {
    gap: 20px;
  }
`;

const ServicesWrapper = styled.div`
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
  width: 170px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-size: 100% 200%;
  transition: background-position 0.5s;
  &:hover {
    background: linear-gradient(to bottom, #3bd969 0, #2d9683 100%);
    animation: ${animateBackground} 2s infinite;
  }

  @media (max-width: 1000px) {
    width: 150px;
    height: 170px;
  }
`;

const ServicesText = styled.div`
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  width: 140px;
`;

const Choose = () => {
  const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  const services = data.choose.services;
  const backgroundStyles = {
    width: '100%',
    background: `linear-gradient(to bottom, rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.5)), url(${data.choose.bannerImage})`,
    backgroundPosition: `center ${scroll * 0.5}px`, 
    backgroundSize: 'cover',
    transform: `rotate(${scroll < 0 ? 180 : 0}deg)`,
    transition: 'transform 0.3s ease',
    marginBottom: "200px"
};
  return (
    <ChooseContainer>
      <WhiteBackground>
        <GradientBackground style={backgroundStyles}>
          <ContentContainer>
            <Heading>{data.choose.chooseHeading}</Heading>
            <Description>{data.choose.chooseDesc}</Description>
          </ContentContainer>
          <ServicesContainer>
            {services.map((service) => (
              <ServicesWrapper>
                <Icon alt="" src={service.chooseIcon} />
                <ServicesText>{service.chooseService}</ServicesText>
              </ServicesWrapper>
            ))}
          </ServicesContainer>
        </GradientBackground>
      </WhiteBackground>
    </ChooseContainer>
  );
};

export default Choose;