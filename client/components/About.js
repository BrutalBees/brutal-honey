import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledAboutPic = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  height: 80vh;
  width: 50%;
`;

const StyledHeader = styled.h1`
  text-align: center;
  padding-top: 60px;
  font-weight: bold;
`;

const StyledSubtitle = styled.h3`
  text-align: center;
  padding-top: 45px;
`;

const StyledParagraph = styled.p`
  display: block;
  text-align: center;
  width: 30%;
  padding-top: 30px;
  padding-bottom: 150px;
  margin: auto;
  margin-left: 700px;
  text-align-last: center;
  line-height: 2;
  word-spacing: 5px;
`;

const About = () => {
  return (
    <div>
      <StyledHeader>About 🐝</StyledHeader>
      <StyledAboutPic
        src={
          'https://images.pexels.com/photos/4790590/pexels-photo-4790590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      />
      <StyledSubtitle>ANCIENT WISDOM + AWESOME SMELLS.</StyledSubtitle>
      <StyledParagraph>
        We lovingly create handcrafted premium honey that will change the way
        you think about honey. We make it the way nature intended, with bees
        drawing nectar from wildflower blossoms across superior forage lands,
        tended by trusted beekeepers, using responsible practices that respect
        the environment. Each product is infused with the elements of aroma,
        memory, place and beauty traditions from across the globe. Our honies
        carry with them stories and maps of their discoveries. Always striving
        to inspire and to be inspired. That's why Brutal Honey is the
        Beesponsible honey .
        <br /> Brutal Bees with Love, Angel + Nyjia + Katie
      </StyledParagraph>
    </div>
  );
};

export default About;
