'use client';

import { useEffect, useMemo, useState } from 'react';
import Layout from '@/app/components/Layout.component';
import Dropdown from './components/Dropdown.component';
import gradientDirectionTailwindCSS from './js/gradientDirectionTailwindCSS';
import { gradientDirectionMap } from './js/gradientDirectionTailwindCSS';

const BackgroundGeneratorPage = () => {
  const [color1, setColor1] = useState('#00ff00');
  const [color2, setColor2] = useState('#ff0000');
  const [gradientDirection, setGradientDirection] =
    useState('bottom right');

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === 'color1') {
      setColor1(e.target.value);
    } else if (e.target.name === 'color2') {
      setColor2(e.target.value);
    } else if (e.target.name === 'gradientDirection') {
      setGradientDirection(e.target.value);
    }

    console.log(e.target.name);
    console.log(e.target.value);
  };

  const bgGradient = useMemo(() => {
    return `linear-gradient(to ${gradientDirection}, ${color1}, ${color2})`;
  }, [color1, color2, gradientDirection]);

  const bgGradientTailwindCSS = useMemo(() => {
    return `bg-gradient-${gradientDirectionTailwindCSS(
      gradientDirection,
      gradientDirectionMap,
    )} from-[${color1}] to-[${color2}]`;
  }, [color1, color2, gradientDirection]);

  return (
    <Layout>
      <page
        className={`w-[100%] h-[100%] z-[1000] flex flex-col items-center place-items-center lowercase ${bgGradientTailwindCSS}`}
        style={{
          background: bgGradient,
        }}
      >
        <div
          id="gradient-text-container"
          className="p-5 mt-5 rounded-lg bg-white bg-opacity-30 backdrop-filter backdrop-blur-md shadow-xl flex flex-col items-center place-items-center"
        >
          <h1 className="text-3xl top-1 ubuntu px-7 w-[100%] text-center">
            Background Generator
          </h1>
          <h2 className="text-2xl top-1 ubuntu px-7 w-[100%] text-center">
            Current CSS Background
          </h2>
          <div className="flex flex-row w-[100%] justify-center items-center">
            <input
              type="color"
              name="color1"
              value={color1}
              onChange={(e) => handleChange(e)}
              className="mx-2 hover:scale-110 transition-all duration-200 border-black border-[1px] shadow-xl"
            />
            <input
              type="color"
              name="color2"
              value={color2}
              onChange={(e) => handleChange(e)}
              className="mx-2 hover:scale-110 transition-all duration-200"
            />
          </div>
          <Dropdown
            label="Gradient Direction"
            name="gradientDirection"
            onSelectedChange={(e) => handleChange(e)}
            options={gradientDirectionMap}
          />

          <h3 className="lowercase text-xl top-1 ubuntu px-7 w-[100%] text-center">
            {bgGradient}
          </h3>
        </div>
      </page>
    </Layout>
  );
};

export default BackgroundGeneratorPage;
