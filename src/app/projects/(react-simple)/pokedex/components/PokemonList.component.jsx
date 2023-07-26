import PokemonCard from './PokemonCard.component';

const PokemonList = ({ pokemons }) => {
  return (
    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 auto-rows-auto gap-3 w-[85vw]">
      {pokemons.map((poke, idx) => {
        // const { name, height, weight, id, spriteURL } = poke;
        // return <h2 key={idx}>{name}</h2>;
        return (
          <li key={idx}>
            <PokemonCard pokemon={poke} />
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonList;
