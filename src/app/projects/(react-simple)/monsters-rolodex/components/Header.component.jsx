import PropTypes from 'prop-types';
import { Creepster } from 'next/font/google';

const creepster = Creepster({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
});

const Header = ({ title }) => {
  return (
    <h1 className={`text-[76px] text-black ${creepster.className}`}>{title}</h1>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
