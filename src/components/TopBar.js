import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png';

const TopBarContainer = styled.div`
background: ${({ theme }) => theme.bg};
padding: 10px 0px;
height: auto;
width: 100%;
`;
const FlexContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`;
const ContactInfo = styled.div`
display: flex;
gap: 60px;
`;
const LogoImg = styled.img`
height: 50px;
`;
const Title = styled.div`
color: #b5b8bf;
font-weight: 400;
font-size: 15px;
`;
const Contact = styled.div`
display: flex;
font-weight: 500;
font-size: 16px;
`;
const Info = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`;

const TopBar = () => {
  return (
    <TopBarContainer>
        <FlexContainer>
            <LogoImg src={logo} alt="Logo" />
            <ContactInfo>
                <Info>
                    <Title>CALL US ON</Title>
                    <Contact>(+91) 7355147501</Contact>
                </Info>
                <Info>
                    <Title>OFFICE OPENED</Title>
                    <Contact>10am to 6pm</Contact>
                </Info>
            </ContactInfo>
        </FlexContainer>
    </TopBarContainer>
  )
}

export default TopBar