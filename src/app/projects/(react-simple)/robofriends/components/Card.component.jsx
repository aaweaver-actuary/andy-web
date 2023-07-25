import Image from 'next/image';

const Card = ({ id, name, email, height, width }) => {
  return (
    <div
      className={`
      flex flex-col
      w-[${width}px]
      h-[${1.25 * height}px]
    bg-green-200  p-3 m-2 hover:scale-110 hover:shadow-xl rounded-lg duration-200 ease-in-out
    ${/*border-black border-[1px]*/ ''}
    `}
    >
      <Image
        src={`https://robohash.org/${id}?${width}x${height}`}
        alt="robot"
        width={width}
        height={height}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
