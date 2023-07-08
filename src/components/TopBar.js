import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png';

const TopBarContainer = styled.div`
background: ${({ theme }) => theme.bg};
padding: 10px 0px;
height: auto;
width: 100%;
display: flex;
justify-content: center;
@media (max-width: 1700px) {
    display: none;
  }
`;
const FlexContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 60%;
`;
const ContactInfo = styled.div`
display: flex;
gap: 60px;
`;
const LogoImg = styled.img`
width: 300px;
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

const TopBar = ({ menuOpen, setMenuOpen }) => {
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