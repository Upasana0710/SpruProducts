import React from "react";
import styled from "styled-components";
import data from "../data.json";

const Heading = styled.div`
  font-size: 38px;
  font-weight: 540;
  color: ${({ theme }) => theme.bg};
  text-align: center;
  margin-bottom: 46px;
  text-transform: uppercase;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Paragraph = styled.div`
  font-size: 16px;
  font-family: Lato;
  color: ${({ theme }) => theme.bgLight};
  max-width: 700px;
  text-align: center;
  margin-bottom: 50px;
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 85%;
  }
`;

const IndustriesContainer = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(76.08deg, rgb(33, 107, 93), rgb(21, 168, 107));
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.secondary};
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const OverlayText = styled.div`
  position: absolute;
  top: 80%;
  right: 10%;
  color: ${({ theme }) => theme.bg};
  font-size: 18px;
  font-weight: 500;
`;
const Items = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const ItemContainer = styled.div`
  position: relative;
  background-color: #fff;
  width: 370px;
  height: 231px;
  overflow: hidden;
  &:hover ${Overlay} {
    opacity: 0.8;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  height: 231px;
  object-fit: cover;
  &:hover {
    transform: scale(1.5);
  }
`;

const Industries = () => {
  const info = data.industries.industryInfo;
  return (
    <IndustriesContainer>
      <ContentContainer>
        <Heading>{data.industries.industriesHeading}</Heading>
        <Paragraph>{data.industries.indusetriesDescription}</Paragraph>
        <Images>
          <Items>
            {info.map((industry) => (
              <ItemContainer>
                <Image alt="" src={industry.industryImage} />
                <Overlay>
                  <OverlayText>{industry.industryTitle}</OverlayText>
                </Overlay>
              </ItemContainer>
            ))}
          </Items>
        </Images>
      </ContentContainer>
    </IndustriesContainer>
  );
};

export default Industries;