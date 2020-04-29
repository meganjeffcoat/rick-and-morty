import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CharCard from './CharCard';
import SearchForm from './SearchForm';

export default function CharList() {

    const [chars, setChars] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const search = charArr => {
        setFilteredData(charArr);
    };

    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
        .then(res => {
            console.log(res.data);
            setChars(res.data.results);
            setFilteredData(res.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <section>
            <Link to={'/'}>
                Home
            </Link>
            <SearchForm search={search} chars={chars} />
            {filteredData.map(char => {
                return <CharCard key={char.id} character={char} />
            })}
        </section>
    );
}