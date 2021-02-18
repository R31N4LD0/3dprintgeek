async function time (request, response) {
    const pokemonRequestURL = process.env.POKEMON_REQUEST_URL;

    const dynamicDate = new Date();
    
    const pokemonCall = await fetch(`${pokemonRequestURL}1`);
    const pokemonJSON = await pokemonCall.json();
    const pokemonName = pokemonJSON.name;

    response.json({
        date: dynamicDate.toGMTString(),
        pokemonName
    });
}

// https://pokeapi.co/api/v2/pokemon/1

export default time;