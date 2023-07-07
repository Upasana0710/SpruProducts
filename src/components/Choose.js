import React from 'react';
import styled from 'styled-components';
import data from '../data.json';

const ChooseContainer = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const GradientBackground = styled.div`
  background: linear-gradient(76.08deg, rgb(33, 107, 93), rgb(196, 215, 178)), url(${data.choose.bannerImage});
  height: 350px;
  width: 100%;
  opacity: 0.9;
`;

const WhiteBackground = styled.div`
  background-color: #fff;
  width: 100%;
  height: 130px;
`;

const Heading = styled.div`
  font-size: 36px;
  font-weight: 540;
  text-align: center;
  color: ${({ theme }) => theme.bg};
  margin-top: 80px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.bgLight};
  width: 700px;
  line-height: 24px;
  margin-top: 40px;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const ServicesContainer = styled.div`
  position: absolute;
  top: 260px;
  left: 20%;
  display: flex;
  align-items: center;
  gap: 40px;
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
`;

const ServicesText = styled.div`
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
`;

const Choose = () => {
  return (
    <ChooseContainer>
      <GradientBackground>
      <ContentContainer>
        <Heading>{data.choose.chooseHeading}</Heading>
        <Description>{data.choose.chooseDesc}</Description>
      </ContentContainer>
      <ServicesContainer>
        <ServicesWrapper>
          <Icon alt="" src={data.choose.chooseIcon1} />
          <ServicesText>{data.choose.chooseService1}</ServicesText>
        </ServicesWrapper>
        <ServicesWrapper>
          <Icon alt="" src={data.choose.chooseIcon2} />
          <ServicesText>{data.choose.chooseService2}</ServicesText>
        </ServicesWrapper>
        <ServicesWrapper>
          <Icon alt="" src={data.choose.chooseIcon3} />
          <ServicesText>{data.choose.chooseService3}</ServicesText>
        </ServicesWrapper>
        <ServicesWrapper>
          <Icon alt="" src={data.choose.chooseIcon4} />
          <ServicesText>{data.choose.chooseService4}</ServicesText>
        </ServicesWrapper>
        <ServicesWrapper>
          <Icon alt="" src={data.choose.chooseIcon5} />
          <ServicesText>{data.choose.chooseService5}</ServicesText>
        </ServicesWrapper>
        <ServicesWrapper>
          <Icon alt="" src={data.choose.chooseIcon6} />
          <ServicesText>{data.choose.chooseService6}</ServicesText>
        </ServicesWrapper>
      </ServicesContainer>
      </GradientBackground>
      <WhiteBackground />
      {/* Repeat the above ServicesContainer block for other sections */}
    </ChooseContainer>
  );
};

export default Choose;
