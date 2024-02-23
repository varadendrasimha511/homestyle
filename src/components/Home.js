// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  background: linear-gradient(45deg, #3498db, #9b59b6); /* Gradient background */
  color: #FF0000;
  min-height: 50vh;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: center; /* Center content horizontally */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle lift */
`;

const Logo = styled.img`
  max-width: 100%;
  margin-top: 50px;
`;

const Section = styled.section`
  margin: 40px 0;
  text-align: center;
  flex: 1;
`;

const HeadingLink = styled(Link)`
  text-decoration: none;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
`;

const MainHeading = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin-top: 15px;
  text-align: center;
  color: #800080;
`;

const Heading2 = styled.h2`
  font-family: 'Lucida Handwriting', sans-serif;
  font-size: 24px;
`;

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: #ff6600;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  /* Add more styles as needed */
  &:hover {
    background-color: #e65100; /* Change color on hover */
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Logo src="/path/to/your/logo.png" alt="Company Logo" />
      <Section>
        <HeadingLink to="/">
          <MainHeading>Right Medical Devices Pvt Ltd</MainHeading>
        </HeadingLink>
      </Section>
      <Section>
        <HeadingLink to="/about">
          <Heading2>
            <ButtonLink to="/about">
              <StyledButton>About</StyledButton>
            </ButtonLink>
          </Heading2>
        </HeadingLink>
        <Paragraph>
       
        </Paragraph>
      </Section>

      <Section>
        <HeadingLink to="/products">
          <Heading2>
            <ButtonLink to="/products">
              <StyledButton>Products</StyledButton>
            </ButtonLink>
          </Heading2>
        </HeadingLink>
        <Paragraph>
         
        </Paragraph>
      </Section>

      <Section>
        <HeadingLink to="/gallery">
          <Heading2>
            <ButtonLink to="/gallery">
              <StyledButton>Gallery</StyledButton>
            </ButtonLink>
          </Heading2>
        </HeadingLink>
        <Paragraph>
         
        </Paragraph>
      </Section>

      <Section>
        <HeadingLink to="/contact">
          <Heading2>
            <ButtonLink to="/contact">
              <StyledButton>Contact Us</StyledButton>
            </ButtonLink>
          </Heading2>
        </HeadingLink>
        <Paragraph>
          
        </Paragraph>
      </Section>
    </HomeContainer>
  );
};

export default Home;
