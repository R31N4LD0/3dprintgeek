async function APISearchById (request, response) {
    const id = request.query.id;
    
    console.log('\n\n\n');
    console.log(id);
    
    const pokemonRequestURL = process.env.POKEMON_REQUEST_URL;
    
    const dinamicPokemonURL = await fetch(`${pokemonRequestURL}pokemon/${id}`);
    const pokemonJSON = await dinamicPokemonURL.json();
    const pokemonName = pokemonJSON.name;
    const pokemonImage = pokemonJSON.sprites.front_default;

    console.log(pokemonImage);
    console.log('\n\n\n');

    response.json({
        pokemonName,
        pokemonImage
    });
}

export default APISearchById;