'use client';

import { useState } from 'react';

import propTypes from 'prop-types';

// read in the nav data from the nav.data.json file
import navData from './nav.data.json';

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
      {navData.map((navItem) => (
        <button
          key={navItem.id}
          id={`nav-button-${navItem.id}`}
          className={`${
            navItem.id === toggledButton
              ? 'nav-toggled'
              : ''
          } ${
            isLandingPage
              ? 'mr-5 nav-landing'
              : 'mr-1 nav-not-landing'
          }`}
          onClick={() => handleClickedButton(navItem.id)}
        >
          {navItem.name}
        </button>
      ))}
    </nav>
  );
};

Nav.propTypes = {
  isLandingPage: propTypes.bool.isRequired,
  setIsLandingPage: propTypes.func.isRequired,
};

export default Nav;
