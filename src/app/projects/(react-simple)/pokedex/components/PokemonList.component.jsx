import PokemonCard from './PokemonCard.component';

const PokemonList = ({ pokemons }) => {
  return (
    <ul>
      {pokemons.map((pokemon) => {
        console.log('pokemon:', pokemon);
        console.log('pokemon.name:', pokemon.name);
        console.log(
          'pokemon.sprites.front_default:',
          pokemon.sprites.front_default,
        );
        let { name } = pokemon;
        let { front_default } = pokemon.sprites;
        return (
          <li key={name}>
            <PokemonCard name={name} img={front_default} />
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonList;
