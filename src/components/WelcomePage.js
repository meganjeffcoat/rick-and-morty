import React from 'react';
import styled from 'styled-components';

import portal from '../portal.png';

const Welcome = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #5AADC9;
    margin-left: 30%;
    font-size: 2.5em;
  }

  img {
    margin-left: 35%;
    margin-bottom: 10%;
    width: 30%;
  }
`;

export default function WelcomePage() {

    return (
      <Welcome className="welcome-page">
          <h1>Welcome to the ultimate fan site!</h1>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
      </Welcome>
    );
  }