import { iGTaOpportunities } from '@/data/iGTaOpportunities';
import React from 'react';
import styled from 'styled-components';

const IGTaOpportunities = () => {
  return (
    <Container>
      {iGTaOpportunities.map((opportunity, index) => (
        <Card key={index}>
          <CardContent>
            <Title>{opportunity.title}</Title>
            <Location>{opportunity.location}</Location>
            <Duration>{opportunity.duration}</Duration>
            <Description>{opportunity.description}</Description>
            <Company>{opportunity.company}</Company>
            <Applicants>{opportunity.applicants} applicants</Applicants>
            <ApplyButton>Apply Now</ApplyButton>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default IGTaOpportunities;

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;  // Align the cards vertically
  gap: 30px;
  padding: 40px;
  align-items: center;  // Center the cards horizontally
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;  // Stack the content vertically
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 500px;  // Fixed width for cards
  height: auto;  // Height adjusts based on content
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 10px;
`;

const Location = styled.p`
  font-size: 1.1rem;
  color: #777;
`;

const Duration = styled.p`
  font-size: 1.1rem;
  color: #777;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-top: 10px;
  flex-grow: 1;
`;

const Company = styled.p`
  font-size: 1.1rem;
  color: #333;
  font-weight: bold;
`;

const Applicants = styled.p`
  font-size: 1.1rem;
  color: #444;
  font-weight: bold;
  margin-top: 10px;
`;

const ApplyButton = styled.button`
  background-color: #4CAF50;  // Green color for the button
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;  // Darker green on hover
  }

  &:focus {
    outline: none;
  }
`;
