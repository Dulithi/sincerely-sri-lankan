import { sriLankaSections } from '@/data/sriLankaSectionData';
import React from 'react';
import styled from 'styled-components';

const SriLankaSection = () => {
  return (
    <Container>
      {sriLankaSections.map((section, index) => (
        <SectionCard key={index}>
          {section.image && <Image src={section.image} alt={section.title} />}
          <Title>{section.title}</Title>
          <Description>{section.description}</Description>
        </SectionCard>
      ))}
    </Container>
  );
};

export default SriLankaSection;

// Styled Components

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  // 3 equal-sized columns
  gap: 30px;  // Increased the gap for spacing
  padding: 40px;  // Increased the padding for more spacing around the grid
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); // 2 columns on medium screens
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;  // 1 column on smaller screens
  }
`;

const SectionCard = styled.div`
  background-color: #fff;
  border-radius: 15px;  // Slightly larger border radius for a more modern look
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);  // Increased shadow for more emphasis
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;  // Increased padding inside the card
  height: 540px;  // Increased card height
  
  &:hover {
    transform: translateY(-10px);  // Slightly stronger hover effect
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;  // Larger title for more impact
  color: #333;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;  // Increased font size for better readability
  color: #555;
  line-height: 1.6;
  text-align: center;
  flex-grow: 1;  // Ensures the description takes available space
`;

const Image = styled.img`
  width: 100%;
  height: 250px;  // Increased image height
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 10px;
`;

