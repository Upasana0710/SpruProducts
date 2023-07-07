import React from 'react';
import styled from 'styled-components';
import data from '../data.json';

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
`;

const Testimonial = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: 0px 0px 20px rgba(0, 86, 106, 0.1);
  border-bottom: 4px solid #2dc1e4;
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
    const info = [{comment: data.testimonials.comment1, name: data.testimonials.name1, role: data.testimonials.role1, company: data.testimonials.company1},
                {comment: data.testimonials.comment2, name: data.testimonials.name2, role: data.testimonials.role2, company: data.testimonials.company2},
                {comment: data.testimonials.comment3, name: data.testimonials.name3, role: data.testimonials.role3, company: data.testimonials.company3},]
    return (
        <TestimonialsContainer>
            <Heading>Our Testimonials</Heading>
            <Container>
                {info.map((testimonial) => (
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
                ))}
            </Container>
        </TestimonialsContainer>
    );
};

export default Testimonials;
