import React from 'react'

export default function Pokemon({ pokemonList }) {
    return (
        <>
            <ul>
                {pokemonList.map( (poke) => {
                    let pokeNumber = poke.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
                    let pokeImgURL = `/images/compressed/${pokeNumber}.png`;
                    let pokeDescription = `Imagem ilustrativa do pokemon ${poke.name}`
                    return (
                        <li key={pokeNumber}>
                            <a key={poke.name} href={poke.url}>
                                <figure>
                                    <img src={pokeImgURL} alt={pokeDescription} width='80'/>
                                    <figcaption>{poke.name}</figcaption>
                                </figure>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}
