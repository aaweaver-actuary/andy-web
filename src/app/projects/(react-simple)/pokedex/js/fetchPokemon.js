const pokemonUrl =
  'https://pokeapi.co/api/v2/pokemon?limit=151';

const fetchPokemon = async () => {
  // response from api
  const res = await fetch(pokemonUrl)
    .then((res) => res.json())
    .then((pokemon) => {
      console.log(pokemon); // <- Add this line
      setPokemon(pokemon.results);
    })
    .catch((err) => console.log(err));
  // return pokemon
  return res;
};

export default fetchPokemon;
