'use client';

import { useMemo, useState } from 'react';

import Layout from '@/app/components/Layout.component';
import Dropdown from './components/Dropdown.component';
import PopupInfo from './components/PopupInfo.component';

import { gradientDirectionMap } from './js/gradientDirectionTailwindCSS';
import Button from '@/app/components/Button.component';

const BackgroundGeneratorPage = () => {
  const [color1, setColor1] = useState('#00ff00');
  const [color2, setColor2] = useState('#ff0000');
  const [gradientDirection, setGradientDirection] =
    useState('bottom right');
  const [isSnackbarOpen, setIsSnackbarOpen] =
    useState(false);

  const bgGradient = useMemo(() => {
    return `linear-gradient(to ${gradientDirection}, ${color1}, ${color2})`;
  }, [color1, color2, gradientDirection]);

  const handleChange = (e, name = 'a_name') => {
    e.preventDefault();
    const targetName = e.target.name || name;

    if (targetName === 'color1') {
      setColor1(e.target.value);
    } else if (targetName === 'color2') {
      setColor2(e.target.value);
    } else if (targetName === 'gradientDirection') {
      setGradientDirection(e.target.value);
    }

    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleClickCSSCode = async () => {
    setIsSnackbarOpen(true);
    try {
      await navigator.clipboard.writeText(bgGradient);
      console.log('Gradient copied to clipboard');
    } catch (err) {
      console.log('Failed to copy text: ', err);
    }
  };

  const getRandomIntegers = (min, max, n = 1) => {
    const randomIntegers = [];

    for (let i = 0; i < n; i++) {
      randomIntegers.push(
        Math.floor(Math.random() * (max - min + 1)) + min,
      );
    }

    if (n === 1) return randomIntegers[0];
    return randomIntegers;
  };

  const intToHex = (int) => {
    if (int < 10) {
      return `${int}`;
    } else {
      let out;
      switch (int) {
        case 10:
          return 'a';
        case 11:
          return 'b';
        case 12:
          return 'c';
        case 13:
          return 'd';
        case 14:
          return 'e';
        case 15:
          return 'f';
        default:
          alert('Error: intToHex()');
          return null;
      }
    }
  };

  const generateRandomGradient = () => {
    const randColInt = getRandomIntegers(0, 15, 12);

    const randomColor1 =
      '#' +
      String(intToHex(randColInt[0])) +
      String(intToHex(randColInt[1])) +
      String(intToHex(randColInt[2])) +
      String(intToHex(randColInt[3])) +
      String(intToHex(randColInt[4])) +
      String(intToHex(randColInt[5]));

    const randomColor2 =
      '#' +
      String(intToHex(randColInt[6])) +
      String(intToHex(randColInt[7])) +
      String(intToHex(randColInt[8])) +
      String(intToHex(randColInt[9])) +
      String(intToHex(randColInt[10])) +
      String(intToHex(randColInt[11]));

    const randomGradientDirection = Object.keys(
      gradientDirectionMap,
    )[getRandomIntegers(0, 7, 1)];
    setColor1(randomColor1);
    setColor2(randomColor2);
    setGradientDirection(randomGradientDirection);

    let color1Input = document.getElementById('color1');
    let color2Input = document.getElementById('color2');
    let gradientDirectionInput = document.getElementById(
      'gradientDirection',
    );

    color1Input.value = randomColor1;
    color2Input.value = randomColor2;
    gradientDirectionInput = randomGradientDirection;
    console.log(color1Input);
    console.log(randomColor1);
    console.log(randomColor2);
    console.log(randomGradientDirection);
  };

  return (
    <Layout>
      <page
        className={`w-[100%] h-[100%] z-[1000] flex flex-col items-center place-items-center lowercase`}
        style={{
          background: bgGradient,
        }}
      >
        <div
          id="gradient-text-container"
          className="p-5 mt-5 rounded-lg bg-white bg-opacity-30 backdrop-filter backdrop-blur-md shadow-xl flex flex-col items-center place-items-center"
        >
          <h1 className="text-3xl top-1 ubuntu px-7 w-[100%] text-center">
            Gradient Background Generator
          </h1>
          <h2 className="text-2xl top-1 ubuntu px-7 w-[100%] text-center">
            Current CSS Background
          </h2>
          <div className="flex flex-row w-[100%] justify-center items-center mt-2">
            <input
              id="color1"
              type="color"
              name="color1"
              value={color1}
              onChange={(e) => handleChange(e)}
              className="mx-2 hover:scale-110 transition-all duration-200 border-black border-[1px] shadow-xl"
            />
            <input
              id="color2"
              type="color"
              name="color2"
              value={color2}
              onChange={(e) => handleChange(e)}
              className="mx-2 hover:scale-110 transition-all duration-200 border-black border-[1px] shadow-xl"
            />
          </div>
          <Dropdown
            id="gradientDirection"
            label="Gradient Direction"
            name="gradientDirection"
            selected={'bottom right'}
            onSelectedChange={(e) =>
              handleChange(e, 'gradientDirection')
            }
            options={gradientDirectionMap}
            value={gradientDirection}
          />

          <h3
            className="lowercase text-xl top-1 hover:text-blue-700 ubuntu px-7 mb-3 w-[100%] text-center bg-white bg-opacity-40 backdrop-blur-md rounded-xl mt-3 cursor-pointer"
            onClick={handleClickCSSCode}
          >
            {bgGradient}
          </h3>
          <Button
            text="Generate random gradient"
            onClick={generateRandomGradient}
          />
        </div>

        <PopupInfo
          message="CSS code copied to clipboard"
          isSnackbarOpen={isSnackbarOpen}
          setIsSnackbarOpen={setIsSnackbarOpen}
          snackbarSeverity={'success'}
        />
      </page>
    </Layout>
  );
};

export default BackgroundGeneratorPage;
