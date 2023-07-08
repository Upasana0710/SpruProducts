import React from 'react';
import styled from 'styled-components';
import data from '../data.json';
import {Swiper, SwiperSlide} from "swiper/react";

const TestimonialsContainer = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
`;
const Heading = styled.div`
  font-size: 38px;
  font-weight: 540;
  text-align: center;
  margin: 50px 0px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  max-width: 1100px;
  width: 100%;
`;

const Testimonial = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: 0px 0px 20px rgba(0, 86, 106, 0.1);
  border-bottom: 4px solid ${({ theme }) => theme.primary+99};
  box-sizing: border-box;
  width: 370px;
  height: 335px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

const TestimonialDetail = styled.div`
  width: 340px;
  text-align: center;
  margin-top: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const StrongName = styled.div`
  font-size: 18px;
`;

const CompanyName = styled.i`
  line-height: 24px;
  width: ${(props) => props.width}px;
  height: 19px;
`;

const TestimonialPic = styled.div`
  border-radius: 100px;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  border: 5px solid ${({ theme }) => theme.bg};
  box-sizing: border-box;
  width: 100px;
  height: 100px;
`;

const TestimonialIcon = styled.img`
  left: 5px;
  border-radius: 90px;
  max-width: 100%;
  height: 90px;
  object-fit: cover;
`;

const TestimonialTextContainer = styled.div`
  line-height: 24px;
`;

const Testimonials = () => {
    const info = data.testimonials.comments;
    return (
        <TestimonialsContainer>
            <Heading>Our Testimonials</Heading>
            <Container>
              <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
                {info.map((testimonial) => (
                  <SwiperSlide>
                    <Testimonial>
                    <TestimonialPic>
                        <TestimonialIcon alt="" src={data.testimonials.profileIcon} />
                    </TestimonialPic>
                    <TestimonialDetail>
                        <TestimonialTextContainer>{testimonial.comment}</TestimonialTextContainer>
                        <StrongName>{testimonial.name}</StrongName>
                        <CompanyName>{testimonial.role}</CompanyName>
                        <CompanyName>{testimonial.company}</CompanyName>
                    </TestimonialDetail>
                </Testimonial>
                </SwiperSlide>
                ))}
                </Swiper>
            </Container>
        </TestimonialsContainer>
    );
};

export default Testimonials;
