import React from 'react';
import styled from 'styled-components';
import data from '../data.json';

const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-top: 100px;
  padding-bottom: 20px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  @media (max-width: 1000px) {
    padding-top: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Image = styled.img`
  height: auto;
  width: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 560px) {
    display: block;
    width: 80%;
  }
`;

const Written = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    align-items: center;
    text-align: start;
    margin-top: 40px;
  }
`;

const Heading = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-family: Nunito;
  color: ${({ theme }) => theme.text_primary};
  text-align: start;
  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const Description = styled.div`
  line-height: 24px;
  font-size: 16px;
  margin-bottom: 40px;
  max-width: 670px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: justify;

  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const Categories = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 800px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Category = styled.div`
  gap: 30px;
  display: flex;
  margin-bottom: 28px;

  @media (max-width: 1000px) {
    justify-content: start;
    width: 100%;
  }
`;

const Cimage = styled.img`
  width: 70px;
  height: 70px;

  @media (max-width: 1000px) {
    width: 50px;
    height: 50px;
  }
`;

const Ccontent = styled.div`
  max-width: 250px;

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

const Ctitle = styled.div`
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  font-size: 20px;
  text-align: start;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;

const Cdesc = styled.p`
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    font-size: 12px;
    line-height: 16px;
    text-align: start;
  }
`;

const Welcome = () => {
  const categories = data.categories;

  return (
    <WelcomeContainer>
      <Content>
        <Image src={data.welcome.toiletCleaner} />
        <Written>
          <Heading>{data.welcome.welcomeHeading}</Heading>
          <Description>{data.welcome.welcomeDescription}</Description>
          <Categories>
            {categories.map((category, index) => (
              <Category key={index}>
                <Cimage src={category.categorypic} />
                <Ccontent>
                  <Ctitle>{category.categorytitle}</Ctitle>
                  <Cdesc>{category.categoryDesc}</Cdesc>
                </Ccontent>
              </Category>
            ))}
          </Categories>
        </Written>
      </Content>
    </WelcomeContainer>
  );
};

export default Welcome;