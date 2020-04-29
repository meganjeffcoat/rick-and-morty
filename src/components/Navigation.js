import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigaton(){
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to={'/characters'}>Characters</Link>
            <Link to={'/locations'}>Locations</Link>
            <Link to={'/episodes'}>Episodes</Link>
        </div>
    )
}