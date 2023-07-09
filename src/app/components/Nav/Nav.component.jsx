import propTypes from 'prop-types';

// read in the nav data from the nav.data.json file
import navData from './nav.data.json';

import Button from '../Button.component';

import Link from 'next/link';

const Nav = ({
  isLandingPage,
  setIsLandingPage,
  toggledButton,
  setToggledButton,
}) => {
  const handleClickedButton = (id) => {
    setToggledButton(id);
    setIsLandingPage(false);
  };

  return (
    <nav className={`flex flex-row mt-10`}>
      {navData.map((navItem, index) => (
        <Link key={`link-${index}`} href={navItem.link}>
          <Button
            key={`button-${index}`}
            text={navItem.name}
          />
        </Link>
      ))}
    </nav>
  );
};

Nav.propTypes = {
  isLandingPage: propTypes.bool.isRequired,
  setIsLandingPage: propTypes.func.isRequired,
};

export default Nav;
