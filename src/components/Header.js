import React from 'react';
import styled from 'styled-components';

import logo from '../logo.png';



export default function Header() {
    return (
        <header>
            <img src={logo} />
            <h1>Fan Page</h1>
        </header>
    )
}
