import { testimonials } from '@/data/testimonials';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const TestimonialCard = () => {
    const testimonialsList = testimonials;
  return (
    <div>
        <StyledWrapper>
        {testimonialsList.map((testimonial, index) => (
            <div key={`testimonial-${index}`} className="card">
              <Image className="card__image" src={testimonial.image} alt={testimonial.name} width="500" height="500" />
              <div className="card__content">
                <p className="card__title">{testimonial.name} from {testimonial.country}  
                </p>
                <p className="card__subtitle">An {testimonial.program} EP
                </p>
                <p className="card__description">{testimonial.message}</p>
              </div>
            </div>
        ))}
        </StyledWrapper>
    
    </div>
  );
}


const StyledWrapper = styled.div`

    display: grid;
  grid-template-columns: repeat(1, 1fr); /* Default to 1 column */
  gap: 20px;
  padding: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on large screens (laptop) */
  }

  .card {
    position: relative;
    width: 300px;
    height: 200px;
    background: linear-gradient(-45deg, #ffcf00 0%, #67e8f9 100% );
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card__image {
    width: 90%;
    height: 86%;
    border-radius: 10px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 16px;
    line-height: 1.2;
    color: #333;
    font-weight: 600;
  }

  .card__subtitle {
    margin: 0;
    font-size: 14px;
    color: #555;
    font-weight: 500;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 12px;
    color: #777;
    line-height: 1.4;
  }

  .card:hover svg {
    scale: 0;
    transform: rotate(-45deg);
  }`;

export default TestimonialCard;
