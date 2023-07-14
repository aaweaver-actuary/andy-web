import Image from 'next/image';

const Picture = () => {
  return (
    <div className="picture">
      <Image src={picture.url} alt={picture.title} />
      <div className="picture__title">{picture.title}</div>
    </div>
  );
};

export default Picture;
