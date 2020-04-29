import React from 'react';

export default function EpisodeCard({ epi }) {
    return (
        <div>
            <p>{epi.name}</p>
            <p>{epi.air_date}</p>
            <p>{epi.episode}</p>
        </div>
    )
}