import Image from 'next/image';

const RoboImage = ({ id, width, height, isModalOpen }) => {
  return (
    <Image
      src={`https://robohash.org/${id}?${width}x${height}`}
      alt="robot"
      width={width}
      height={height}
      style={{ marginTop: isModalOpen ? -100 : 0 }}
    />
  );
};

export default RoboImage;
