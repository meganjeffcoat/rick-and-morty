import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CharCard from './CharCard';

export default function CharList() {

    const [chars, setChars] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/")
        .then(res => {
            console.log(res.data.results);
            setChars(res.data.results);
        })
    }, [])

    return (
        <section>
            <h2>Char List</h2>
            <Link to={'/'}>
                Home
            </Link>
            {chars.map(char => {
                return <CharCard key={char.id} character={char} />
            })}
        </section>
    );
}