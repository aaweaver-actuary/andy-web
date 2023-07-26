'use client';

import { useState, useEffect, useMemo } from 'react';

import Layout from '../../../components/Layout.component';
import Header from './components/Header.component';
import Searchbar from './components/Searchbar.component';
import PokemonList from './components/PokemonList.component';

const PokedexPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState(pokemon);
  const [query, setQuery] = useState('');

  // get all pokemon on page load
  useEffect(() => {}, []);

  // memoize filtered pokemon
  useEffect(() => {
    setFilteredPokemon(pokemon);
  }, [pokemon]);
  // const filteredPokemon = useMemo(() => {
  //   return pokemon.filter((poke) => {
  //     poke.name.toLowerCase().includes(query.toLowerCase());
  //   });
  // }, [pokemon, query]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Header />
        <Searchbar handleSearch={handleSearch} setQuery={setQuery} />
        <PokemonList pokemons={filteredPokemon} />
      </div>
    </Layout>
  );
};

export default PokedexPage;
