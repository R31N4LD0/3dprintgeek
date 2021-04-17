import React from 'react'

export default function Pokemon({ pokemonList }) {
    return (
        <>
            <ul>
                {pokemonList.map( poke => (
                    <li><a key={poke.name} href={poke.url}>{poke.name}</a></li>
                ))}
            </ul>
        </>
    )
}
