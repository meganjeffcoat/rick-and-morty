import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList() {

    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                console.log('locaion', res.data.results);
                setLocation(res.data.results);
            })
            .catch(err =>{
                console.log(err)
            })
    }, []);
    return(
        <section>
            {location.map(loc => {
                return <LocationCard key={loc.id} loc={loc} />
            })}
        </section>
    )
}