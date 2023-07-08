import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from '../data.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

  @media (max-width: 800px) {
    width: 240px;
  }
`;

const Image = styled.img`
  display: block;
  object-fit: cover;
  vertical-align: middle;
  &:hover {
    transform: scale(1.5);
  }
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 68px;

  @media (max-width: 800px) {
    max-width: 400px;
    justify-content: space-evenly;
  }
`;

const ProductsContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const Products = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [maxWidth, setMaxWidth] = useState('1100px');

  useEffect(() => {
    const calculateSlidesPerView = (width) => {
      if (width <= 1100) {
        return { slides: 2, maxWidth: '800px' };
      } else if (width <= 800) {
        return { slides: 1, maxWidth: '600px' };
      } else {
        return { slides: 3, maxWidth: '1100px' };
      }
    };

    const handleResize = () => {
      const { slides, maxWidth } = calculateSlidesPerView(window.innerWidth);
      setSlidesPerView(slides);
      setMaxWidth(maxWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set initial slidesPerView value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const products = data.products;

  return (
    <ProductsContainer>
      <Heading>Our Products</Heading>
      <Images>
        <Swiper spaceBetween={50} slidesPerView={slidesPerView} style={{ maxWidth, width: '100%' }}>
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ImageContainer>
                <Image src={product} alt={`Product ${index}`} />
              </ImageContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </Images>
    </ProductsContainer>
  );
};

export default Products;
