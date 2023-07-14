import Picture from './Picture.compoent';

const PictureList = ({ pictures }) => {
  return (
    <div className="picture-list">
      {pictures.map((picture) => (
        <Picture key={picture.id} picture={picture} />
      ))}
    </div>
  );
};

export default PictureList;
