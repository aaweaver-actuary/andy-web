import propTypes from 'prop-types';

import Header from '../components/Header/Header.component';
import Nav from '../components/Nav/Nav.component';

const LandingPage = ({ isLandingPage, isFirstRender }) => {
  return (
    <>
      <Header
        isLandingPage={isLandingPage}
        isFirstRender={isFirstRender}
      />
      <Nav
        isLandingPage={isLandingPage}
        isFirstRender={isFirstRender}
      />
    </>
  );
};

LandingPage.propTypes = {
  isLandingPage: propTypes.bool.isRequired,
  isFirstRender: propTypes.bool.isRequired,
};

export default LandingPage;
