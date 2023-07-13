import Image from 'next/image';
import fetchPokemon from '../js/fetchPokemon';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="w-[180px] h-[300px] border-[3px] border-blue-600">
      <h2>{pokemon.id}</h2>
      <p>{pokemon}</p>
    </div>
  );
};

export default PokemonCard;
