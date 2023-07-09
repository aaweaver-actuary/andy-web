import propTypes from 'prop-types';

import Header from './components/Header/Header.component';
import Nav from './components/Nav/Nav.component';
import { useEffect, useState } from 'react';

const LandingPage = ({
  isLandingPage,
  isFirstRender,
  setIsLandingPage,
  setIsFirstRender,
  toggledButton,
  setToggledButton,
}) => {
  // set isFirstRender to false after the first render, and first time
  // isLandingPage changes
  useEffect(() => {
    if (isFirstRender && !isLandingPage) {
      setIsFirstRender(false);
    }
  }, [isLandingPage]);

  return (
    <>
      <Header
        isLandingPage={isLandingPage}
        setIsLandingPage={setIsLandingPage}
        isFirstRender={isFirstRender}
        setToggledButton={setToggledButton}
      />
      <Nav
        isLandingPage={isLandingPage}
        setIsLandingPage={setIsLandingPage}
        isFirstRender={isFirstRender}
        toggledButton={toggledButton}
        setToggledButton={setToggledButton}
      />
    </>
  );
};

LandingPage.propTypes = {
  isLandingPage: propTypes.bool.isRequired,
  isFirstRender: propTypes.bool.isRequired,
  setIsLandingPage: propTypes.func.isRequired,
  setIsFirstRender: propTypes.func.isRequired,
};

export default LandingPage;
