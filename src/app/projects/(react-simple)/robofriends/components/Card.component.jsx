import RoboImage from './RoboImage.component';

const Card = ({ id, name, email, height, width, handleClick }) => {
  return (
    <div
      className={`
      flex flex-col items-center text-center
      w-[${width}px]
      h-[${1.25 * height}px]
    bg-green-200  p-3 m-2 hover:scale-110 hover:shadow-xl rounded-lg duration-200 ease-in-out
    ${/*border-black border-[1px]*/ ''}
    `}
      onClick={() => handleClick(id)}
    >
      <RoboImage id={id} width={width} height={height} isModalOpen={false} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
