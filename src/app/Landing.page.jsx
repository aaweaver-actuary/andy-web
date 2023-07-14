import propTypes from 'prop-types';

import Header from './components/Header/Header.component';
import Nav from './components/Nav/Nav.component';

const LandingPage = ({
  isLandingPage,
  isFirstRender,
  setIsLandingPage,
  toggledButton,
  setToggledButton,
}) => {
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
