import React from 'react';
import styled from 'styled-components';
import data from '../data.json';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  height: auto;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  display: block;
  object-fit: center-crop;
  vertical-align: middle;
  &:hover {
    transform: scale(1.5);
  }
`;

const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1100px;
  width: 100%;
  margin-top: 68px;

  @media (max-width: 1024px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

const ProductsContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const Products = () => {
  const products = data.products;
  let slidesPerView = 3;

  if (window.innerWidth <= 1100) {
    slidesPerView = 2;
  }

  if (window.innerWidth <= 768) {
    slidesPerView = 1;
  }

  return (
    <ProductsContainer>
      <Heading>Our Products</Heading>
      <Images>
        <Swiper spaceBetween={50} slidesPerView={slidesPerView}>
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ImageContainer>
                <Image src={product} />
              </ImageContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </Images>
    </ProductsContainer>
  );
};

export default Products;
