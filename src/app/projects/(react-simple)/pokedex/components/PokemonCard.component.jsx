import Image from 'next/image';

const PokemonCard = ({
  pokemon,
  w1 = 180,
  w2 = 180 * 0.8,
  h1 = 300,
  h2 = 300 * 0.8,
}) => {
  const { name, height, weight, id, spriteURL } = pokemon;
  return (
    <div
      className={`w-[${w1}px] h-[${h1}px] border-[7px] border-blue-600 bg-white align-center justify-center flex rounded-lg hover:scale-110 hover:shadow-lg hover:z-[9999] duration-200`}
    >
      <div
        className={`w-[${w2}px] h-[${h2}px] flex flex-col align-center justify-center`}
      >
        <h2 className="w-full text-center">{name}</h2>
        <Image
          src={spriteURL}
          alt={name}
          width={w2 * 0.9}
          height={w2 * 0.9}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
