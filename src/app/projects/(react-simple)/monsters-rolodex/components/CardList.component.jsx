import MonsterCard from './MonsterCard.component';
import PropTypes from 'prop-types';

const CardList = ({ monsters }) => {
  return (
    <div className="w-[85vw] my-0 mx-auto grid grid-cols-4 gap-5">
      {monsters.map((monster) => {
        const { id, name, email } = monster; // destructure monster object
        return (
          <MonsterCard key={id} name={name} email={email} />
        );
      })}
    </div>
  );
};
CardList.propTypes = {
  monsters: PropTypes.array.isRequired,
};

export default CardList;
