'use client';

import propTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Header = ({ isLandingPage, isFirstRender }) => {
  const [showSection, setShowSection] = useState(true);
  const [isCursorBlack, setIsCursorBlack] = useState(true);

  useEffect(() => {
    // toggle isCursorBlack every 0.7s
    const timer = setInterval(() => {
      setIsCursorBlack((prev) => !prev);
    }, 700);

    // clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
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
              : ' leave-home'
          }`}
        >
          .andy-weaver
        </h1>
        <div
          id="header-cursor"
          className={`${
            isCursorBlack
              ? 'bg-black'
              : 'bg-[rgb(214, 219, 220)]'
          }
            ${
              isLandingPage
                ? 'z-[100] w-[90px] h-[200px] mt-[-80px]'
                : 'opacity-0 bg-[rgb(214, 219, 220)]'
            }
            `}
        ></div>
      </div>
      {showSection && (
        <section
          id="subheader"
          className={`flex flex-row justify-center pl-2 pr-2 text-[20px] ${
            isLandingPage
              ? 'pre-fade-out'
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
};

export default Header;
