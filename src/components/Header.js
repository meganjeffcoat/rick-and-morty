import React from "react";
import styled from "styled-components";

import logo from "../logo.png";
import Navigation from "./Navigation";

const Section = styled.section`
  background-color: #2b343e;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 20%;

  }

  h1 {
    font-size: 2.5em;
    color: #5aadc9;
    margin-left: 1.5%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-bottom: 1.5%;
`;

export default function Header() {
  return (
    <Section>
      <Title>
        {" "}
        <img src={logo} />
        <h1>Fan Page</h1>
      </Title>

      <Navigation />
    </Section>
  );
}
