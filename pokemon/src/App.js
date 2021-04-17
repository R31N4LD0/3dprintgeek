import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import PokemonList from './components/PokemonList';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentURL, setCurrentURL] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextURL, setNextURL] = useState();
  const [prevURL, setPrevURL] = useState();
  const [loadingContent, setLoadingContent] = useState(true);

  useEffect(() => {
    setLoadingContent(true);
    let tokenToCancel;

    axios.get(currentURL, {
      callToken: new axios.CancelToken( (c) => {tokenToCancel = c} )
    }).then(res => {
      setNextURL(res.data.next);
      setPrevURL(res.data.previous);
      setPokemonList(res.data.results);
      setLoadingContent(false);
    });

    /*
     * THIS FUNCTIONS IS CALLED EVERY TIME 'useeEffect' IS CALLED
     */
    return () => {
      // tokenToCancel.cancel();
      tokenToCancel();
    }
  }, [currentURL]);

  function loadNextPage() {
    setCurrentURL(nextURL);
  }
  function loadPrevPage() {
    setCurrentURL(prevURL);
  }
  
  // http://localhost:3000/
  // https://pokeapi.co/
  // https://www.youtube.com/watch?v=o3ZUc7zH8BE
  
  if(loadingContent) return 'Searching Pokemon...'

  return (
    <>
      <PokemonList
        pokemonList={pokemonList}
      />
      <Pagination
        loadNextPage={nextURL ? loadNextPage : null}
        loadPrevPage={prevURL ? loadPrevPage : null}
      />
    </>
  );
}

export default App;
