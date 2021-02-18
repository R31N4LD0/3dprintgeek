async function time (request, response) {
    const dynamicDate = new Date();

    const pokemonRequestURL = process.env.POKEMON_REQUEST_URL;

    const pokemonCall = await fetch(`${pokemonRequestURL}1`);
    const pokemonJSON = await pokemonCall.json();
    const pokemonName = pokemonJSON.name;
    const dynamicDate2 = new Date();

    response.setHeader('Cache-Control','s-maxage=20, stale-while-revalidate');
    response.json({
        date: dynamicDate,
        pokemonName,
        date2: dynamicDate2,
    });
}

export default time;