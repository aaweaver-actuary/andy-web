'use client';

import { useState } from 'react';

import LandingPage from './pages/Landing.page';
import AnotherPage from './pages/AnotherPage';

export default function Home() {
  const [isLandingPage, setIsLandingPage] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button onClick={() => setIsLandingPage(!isLandingPage)}>Toggle</button>
      <LandingPage
        isLandingPage={isLandingPage}
        isFirstRender={isFirstRender}
      />
    </main>
  );
}
