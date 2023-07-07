import React from 'react';
import styled from 'styled-components';
import data from '../data.json';

const Heading = styled.b`
  font-size: 38px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  width: 370px;
  height: 330px;
  overflow: hidden;
  cursor:pointer;
`;
const Image = styled.img`
  display: block;
  object-fit: center-crop;
  vertically-align: middle;
  &:hover{
    transform: scale(1.5);
  }
`;

const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 68px;
`;

const ProductsContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Products = () => {
  return (
    <ProductsContainer>
        <Heading>Our Products</Heading>
        <Images>
            <ImageContainer>
                <Image src={data.products.product1Image} />
            </ImageContainer>
            <ImageContainer>
                <Image src={data.products.product2Image} />
            </ImageContainer>
            <ImageContainer>
                <Image src={data.products.product3Image} />
            </ImageContainer>
        </Images>
    </ProductsContainer>
  );
};

export default Products;
