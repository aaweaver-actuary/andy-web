import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <h1 className="text-[76px] text-black creepster">
      {title}
    </h1>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
