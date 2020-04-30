import React from "react";
import styled from "styled-components";

import smportal from "../smportal.png";

const Card = styled.div`
    border: 2px solid #A5F975;
  width: 45%;
  margin: 1% 1% 1% 2.5%;
  display: flex;
  flex-direction: row;
`;


const Text = styled.div`
    /* background-image: url(${smportal});
    background-repeat: no-repeat; */
    padding: 10% 2% 0 10%;
    width: 100%;
    color: #f5f5f5;
    font-size: 1.3em;
`;

export default function CharCard(props) {
  return (
    <Card className="char-card">
        <img src={props.character.image} />
      <Text>
        <div className="charName">Name: {props.character.name}</div>
        <div className="charGender">Gender: {props.character.gender}</div>
        <div className="charSpecies">Species: {props.character.species}</div>
        <div className="charOrigin">Origin: {props.character.origin.name}</div>
        <div className="charStatus">Status: {props.character.status}</div>
      </Text>
    </Card>
  );
}
