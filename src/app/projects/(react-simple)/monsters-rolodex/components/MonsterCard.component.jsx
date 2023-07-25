import PropTypes from 'prop-types';
import Image from 'next/image';

const MonsterCard = ({ name, email }) => {
  return (
    <div className="flex flex-col content-center items-center text-center bg-[#95dada] border-slate-600 border-[1px] rounded-[5px] p-[25px] cursor-pointer hover:shadow-lg hover:scale-105">
      <Image
        alt={`monster ${name}`}
        src={`https://robohash.org/${name
          .toLowerCase()
          .replace(' ', '-')}?set=set2&size=180x180`}
        width={180}
        height={180}
      />

      <h2 className="font-bold text-ellipsis hyphens-auto text-[14px] lg:text-[16px] xl:text-text-[19px]">
        {name}
      </h2>
      <p className="text-ellipsis hyphens-auto text-[14px] lg:text-[16px] xl:text-text-[19px]">
        {email}
      </p>
    </div>
  );
};
MonsterCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default MonsterCard;
