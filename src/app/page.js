'use client';

import { useState, useEffect } from 'react';

import LandingPage from './Landing.page';

export default function Home() {
  const [isLandingPage, setIsLandingPage] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [toggledButton, setToggledButton] = useState(null);
  const [canRenderNewPage, setCanRenderNewPage] = useState(false);

  useEffect(() => {
    console.log(exerciseJS(arr));
  }, []);

  // when toggledButton changes, scroll to the top of the page,
  // set isFirstRender to false, and wait 0.5 seconds before
  // rendering the new page
  useEffect(() => {
    if (!toggledButton) {
      window.scrollTo(0, 0);
      setIsFirstRender(false);
      setCanRenderNewPage(false);
    }

    if (canRenderNewPage) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        setIsFirstRender(false);
        setCanRenderNewPage(true);
      }, 500);
    } else {
      window.scrollTo(0, 0);
      setIsFirstRender(false);
    }
  }, [canRenderNewPage, toggledButton]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <LandingPage
        isLandingPage={isLandingPage}
        setIsLandingPage={setIsLandingPage}
        isFirstRender={isFirstRender}
        setIsFirstRender={setIsFirstRender}
        toggledButton={toggledButton}
        setToggledButton={setToggledButton}
        setCanRenderNewPage={setCanRenderNewPage}
      />
    </main>
  );
}
