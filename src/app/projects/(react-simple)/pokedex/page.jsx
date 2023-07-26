'use client';

import { useState, useEffect } from 'react';

import Layout from '../../../components/Layout.component';
import Scroll from '../../../components/Scroll.component';

import Header from './components/Header.component';
import Searchbar from './components/Searchbar.component';
import PokemonList from './components/PokemonList.component';

import fetchPokemon from './js/fetchPokemon';

async function getPokemon() {
  const pokemon = await fetchPokemon();
  return pokemon;
}

const PokedexPage = () => {
  const [filteredPokemon, setFilteredPokemon] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // get all pokemon on page load
    (async () => {
      const pokemon = await getPokemon();

      // initial filtered state is all pokemon
      setFilteredPokemon(pokemon);
      console.log('pokemon:', pokemon);
    })();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Header />
        <Searchbar handleSearch={handleSearch} setQuery={setQuery} />

        {filteredPokemon && (
          <Scroll>
            <PokemonList pokemons={filteredPokemon} />{' '}
          </Scroll>
        )}
      </div>
    </Layout>
  );
};

export default PokedexPage;
