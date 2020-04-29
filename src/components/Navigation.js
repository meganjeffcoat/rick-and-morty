import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.section`
  background-color: #2b343e;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 1.5%;
`;

const StyledLink = styled(Link)`
  color: #c2d146;
  text-decoration: none;
  font-size: 1em;

  &:hover {
      text-decoration: none;
      color: #5AADC9;
  }
`;

export default function Navigaton() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to={"/characters"}>Characters</StyledLink>
      <StyledLink to={"/locations"}>Locations</StyledLink>
      <StyledLink to={"/episodes"}>Episodes</StyledLink>
    </Nav>
  );
}
