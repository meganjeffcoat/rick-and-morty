import React from 'react';

export default function CharCard(props) {
    return (
        <div className='char-card'>
            <div>
                <img src={props.character.image} />
                <div>
                    <div className='idNumber'>ID: {props.character.id}</div>
                    <div className='charName'>Name: {props.character.name}</div>
                    <div className='charGender'>Gender: {props.character.gender}</div>
                    <div className='charSpecies'>Species: {props.character.species}</div>
                    <div className='charOrigin'>Origin: {props.character.origin.name}</div>
                </div>
                <div> Status: {props.character.status}</div>
            </div>
        </div>
    )
}