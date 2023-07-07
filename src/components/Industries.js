import React from 'react';
import styled from 'styled-components';
import data from '../data.json';

const Heading = styled.div`
  font-size: 38px;
  font-weight: 540;
  color: ${({ theme }) => theme.bg};
  text-align: center;
  margin-bottom: 46px;
  text-transform: uppercase;
`;

const Paragraph = styled.div`
  font-size: 16px;
  font-family: Lato;
  color: ${({ theme }) => theme.bgLight};
  width: 700px;
  text-align: center;
  margin-bottom: 50px;
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IndustriesContainer = styled.div`
  width: 100%;
  height: 800px;
  background: linear-gradient(76.08deg, rgb(33, 107, 93), rgb(196, 215, 178));
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: #fff;
  width: 370px;
  height: 231px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  height: 231px;
  object-fit: cover;
  &:hover{
    transform: scale(1.5);
  }
`;

const PseudoOverlay = styled.div`
  background: linear-gradient(121.98deg, #16bae1, #008bff 50%, #16bae1);
  width: 370px;
  height: 231px;
  opacity: 0.1;
`;

const Industries = () => {
    const info = [ {image: data.industries.industry1Image, title: data.industries.industry1Title},
                   {image: data.industries.industry2Image, title: data.industries.industry2Title},
                   {image: data.industries.industry3Image, title: data.industries.industry3Title},
                   {image: data.industries.industry4Image, title: data.industries.industry4Title},
                   {image: data.industries.industry5Image, title: data.industries.industry5Title},
                   {image: data.industries.industry6Image, title: data.industries.industry6Title}
                ]
  return (
    <IndustriesContainer>
      <ContentContainer>
        <Heading>{data.industries.industriesHeading}</Heading>
        <Paragraph>{data.industries.indusetriesDescription}</Paragraph>
        <Images>
            <Items>
                {info.map((industry) => (
                    <ItemContainer>
                        <Image alt="" src={industry.image} />
                        <PseudoOverlay />
                    </ItemContainer>
                ))}
            </Items>
        </Images>
      </ContentContainer>
    </IndustriesContainer>
  );
};

export default Industries;
