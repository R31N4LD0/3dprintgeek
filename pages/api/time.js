async function time (request, response) {
    const dynamicDate = new Date();
    const pokemonCall = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const pokemonJSON = await pokemonCall.json();
    const pokemonName = pokemonJSON.name;

    response.json({
        date: dynamicDate.toGMTString(),
        pokemonName
    });
}

// https://pokeapi.co/api/v2/pokemon/1

export default time;