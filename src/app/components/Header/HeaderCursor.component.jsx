import propTypes from 'prop-types';
import { useEffect } from 'react';

const HeaderCursor = ({
  isCursorBlack,
  isLandingPage,
  setIsCursorBlack,
}) => {
  useEffect(() => {
    if (!isLandingPage) {
      setIsCursorBlack(true);
    }
  }, [isLandingPage]);

  return (
    <div
      id="header-cursor"
      className={`${
        isCursorBlack
          ? 'bg-black'
          : 'bg-[rgb(214, 219, 220)]'
      }
            ${
              isLandingPage
                ? 'z-[100] w-[90px] h-[200px] mt-[-80px] return-home'
                : 'opacity-0 bg-[rgb(214, 219, 220)] leave-home bg-black'
            }
            `}
    ></div>
  );
};

HeaderCursor.propTypes = {
  isCursorBlack: propTypes.bool.isRequired,
  isLandingPage: propTypes.bool.isRequired,
};

export default HeaderCursor;
