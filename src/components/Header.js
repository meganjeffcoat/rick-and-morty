import React from 'react';
import styled from 'styled-components';

import logo from '../logo.png';

const Section = styled.section`
    background-color: #2b343e;
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column; 
    justify-content: center;

    img{
        width: 50%;
        margin-left: 25%;
        margin-top: 2%;
    }

    h1 {
        font-size: 2.5em;
        color: #5AADC9;
        margin-left: 38%;
        margin-top: -1%;
    }
`;

const Title = styled.div`
    display: flex;
`;

export default function Header() {
    return (
        <Section>
            <img src={logo} />
            <h1>Fan Page</h1>
        </Section>
    )
}
