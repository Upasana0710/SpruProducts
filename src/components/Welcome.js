import React from 'react';
import styled from 'styled-components';
import data from '../data.json';

const WelcomeContainer = styled.div`
display: flex;
justify-content: center;
background: ${({ theme }) => theme.bg};
padding-top: 100px;
padding-bottom: 20px;
`;
const Content = styled.div`
display: flex;
align-items: center;
gap: 60px;
`;
const Image = styled.img`
height: auto;
max-width: 100%;
`;
const Written = styled.div`
display: flex;
flex-direction: column;
`;
const Heading = styled.div`
font-size: 24px;
line-height: 28px;
font-family: Nunito;
color: ${({ theme }) => theme.text_primary};
`;
const Description = styled.div`
line-height: 24px;
font-size: 16px;
margin-bottom: 40px;
width: 670px;
color: ${({ theme }) => theme.text_secondary};
`;
const Categories = styled.div`
display: flex;
gap: 20px;
`;
const Category = styled.div`
gap: 30px;
display: flex;
margin-bottom: 28px;
`;
const Cimage = styled.img`
width: 70px;
height: 70px;
`;
const Ccontent = styled.div`
width: 250px;
`;
const Ctitle = styled.div`
color: ${({ theme }) => theme.text_primary};
margin-bottom: 10px;
font-size: 20px;
`;
const Cdesc = styled.div`
color: ${({ theme }) => theme.text_secondary};

`;
const Welcome = () => {
  return (
    <WelcomeContainer>
        <Content>
            <Image src={data.images.toiletCleaner} />
            <Written>
                <Heading>{data.welcomeHeading}</Heading>
                <Description>{data.welcomeDescription}</Description>
                <Categories>
                    <Category>
                        <Cimage src={data.categories.category1pic} />
                        <Ccontent>
                            <Ctitle>{data.categories.category1title}</Ctitle>
                            <Cdesc>{data.categories.category1Desc}</Cdesc>
                        </Ccontent>
                    </Category>
                    <Category>
                        <Cimage src={data.categories.category2pic} />
                        <Ccontent>
                            <Ctitle>{data.categories.category2title}</Ctitle>
                            <Cdesc>{data.categories.category2Desc}</Cdesc>
                        </Ccontent>
                    </Category>
                </Categories>
                <Categories>
                    <Category>
                        <Cimage src={data.categories.category3pic} />
                        <Ccontent>
                            <Ctitle>{data.categories.category3title}</Ctitle>
                            <Cdesc>{data.categories.category3Desc}</Cdesc>
                        </Ccontent>
                    </Category>
                    <Category>
                        <Cimage src={data.categories.category4pic} />
                        <Ccontent>
                            <Ctitle>{data.categories.category4title}</Ctitle>
                            <Cdesc>{data.categories.category4Desc}</Cdesc>
                        </Ccontent>
                    </Category>
                </Categories>
            </Written>
        </Content>
    </WelcomeContainer>
  )
}

export default Welcome