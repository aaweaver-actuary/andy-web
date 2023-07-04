'use client';

import propTypes from 'prop-types';
import { useEffect, useState } from 'react';

import HeaderCursor from './HeaderCursor.component';

const Header = ({
  isLandingPage,
  isFirstRender,
  setIsLandingPage,
  setToggledButton,
}) => {
  const [showSection, setShowSection] = useState(true);
  const [isCursorBlack, setIsCursorBlack] = useState(true);

  const handleHeaderClick = () => {
    if (isLandingPage) return;
    setIsLandingPage(true);
    setToggledButton(null);
  };

  useEffect(() => {
    // toggle isCursorBlack every 0.7s
    const timer = setInterval(() => {
      setIsCursorBlack((prev) => !prev);
    }, 700);

    // clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // when isLandingPage changes
  useEffect(() => {
    if (!isLandingPage) {
      setIsCursorBlack(true);
    }

    const timer = setTimeout(() => {
      setShowSection(isLandingPage);
    }, 50);

    // when isLandingPage changes, clear the timer
    return () => clearTimeout(timer);
  }, [isLandingPage]);

  return (
    <header className="flex flex-col text-center justify-items-center">
      <div
        id="h1-container"
        className="flex flex-row justify-center items-center h-[270px]"
      >
        <h1
          id="header-name"
          className={`text-[170px] justify-self-end ${
            isLandingPage
              ? isFirstRender
                ? ''
                : 'return-home'
              : 'leave-home'
          }`}
          onClick={() => handleHeaderClick()}
        >
          .andy-weaver
        </h1>
        <HeaderCursor
          isCursorBlack={isCursorBlack}
          setIsCursorBlack={setIsCursorBlack}
          isLandingPage={isLandingPage}
        />
      </div>
      {showSection && (
        <section
          id="subheader"
          className={`flex flex-row justify-center pl-2 pr-2 text-[20px] ${
            isLandingPage
              ? 'pre-fade-out fade-in'
              : 'fade-out pre-fade-in'
          }'`}
        >
          <h2>.husband</h2>
          <h2 className="ml-3 mr-3"> | </h2>
          <h2>.father</h2>
          <h2 className="ml-3 mr-3"> | </h2>
          <h2 className="">.actuary</h2>
          <h2 className="ml-3 mr-3"> | </h2>
          <h2>.predictive-modeler</h2>
          <h2 className="ml-3 mr-3"> | </h2>
          <h2>.developer</h2>
        </section>
      )}
    </header>
  );
};

Header.propTypes = {
  isLandingPage: propTypes.bool.isRequired,
  isFirstRender: propTypes.bool.isRequired,
  setIsLandingPage: propTypes.func.isRequired,
};

export default Header;
