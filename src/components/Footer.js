import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import data from "../data.json";

const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.primary};
  font-family: Lato;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0px 0px 0px;
`;

const FooterTop = styled.div`
  background-color: ${({ theme }) => theme.primary};
  width: 64%;
  height: auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  @media (max-width: 1300px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 20px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;
  }
`;

const LogoIcon = styled.img`
  width: 220px;
  height: 54px;
  object-fit: cover;
`;

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;
`;

const WidgetText = styled.div`
  width: 400px;
  line-height: 24px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.bgLight + 99};
  text-align: justify;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const QuickLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 38px;
  color: ${({ theme }) => theme.bgLight};
  font-family: Lato;
  margin-bottom: 10px;
  text-transform: uppercase;
  border-bottom: 4px solid ${({ theme }) => theme.secondary};
`;

const LinkItem = styled.div`
  line-height: 22px;
  display: flex;
  text-align: start;
  color: ${({ theme }) => theme.bgLight + 99};
`;

const GetInTouchContainer = styled.div`
  display: flex;
  flex-direction: column;
  test-align: start;
  align-items: start;
  margin-top: 20px;
`;

const ContactItem = styled.div`
  width: 250px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.bgLight + 99};
`;
const Item = styled.div`
  text-transform: uppercase;
  color: ${({ theme }) => theme.bgLight};
  font-size: 16px;
`;

const FooterBottom = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-top: 1px solid rgba(255, 255, 255, 0.02);
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 15px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px 0px;
  }
`;

const BottomText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.bgLight};
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.bgLight};
  gap: 18px;
  cursor: pointer;
`;

const Footer = () => {
  const links = data.footer.links;
  return (
    <FooterContainer>
      <FooterTop>
        <FooterContent>
          <FlexContainer>
            <WidgetContainer>
              <LogoIcon alt="" src={logo} />
              <WidgetText>{data.footer.footerText}</WidgetText>
            </WidgetContainer>
            <WidgetContainer>
              <QuickLinksContainer>
                <Title>Quick Links</Title>
                <>
                  {links.map((link) => (
                    <LinkItem style={{ color: "#FFFFFF" }}>{link}</LinkItem>
                  ))}
                </>
              </QuickLinksContainer>
            </WidgetContainer>
          </FlexContainer>
          <WidgetContainer>
            <GetInTouchContainer>
              <Title>Get In Touch</Title>
              <ContactItem>
                <Item>Address:</Item>
                {data.footer.address}
              </ContactItem>
              <ContactItem>
                <Item>Mobile:</Item>
                {data.footer.mobile}
              </ContactItem>
              <ContactItem>
                <Item>Email:</Item>
                {data.footer.email}
              </ContactItem>
            </GetInTouchContainer>
          </WidgetContainer>
        </FooterContent>
      </FooterTop>
      <FooterBottom>
        <BottomText>© Copyright 2020 SPRU Products</BottomText>
        <BottomText>Design With By LIVE Solutions</BottomText>
        <LinkContainer>
          <LinkItem style={{ color: "#f0f0f0" }}>About</LinkItem>
          <LinkItem style={{ color: "#f0f0f0" }}>Help Desk</LinkItem>
          <LinkItem style={{ color: "#f0f0f0" }}>Privacy Policy</LinkItem>
        </LinkContainer>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;