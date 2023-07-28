'use client';

import { useEffect, useState } from 'react';

import Layout from '../../../components/Layout.component';
import Search from './components//Search.component';
import Header from './components/Header.component';
import RoboList from './components/RoboList.component';
import RoboModal from './components/RoboModal.component';
import Scroll from './components/Scroll.component';
import ErrorHandler from './components/ErrorHandler.component';

import { ErrorBoundary } from 'react-error-boundary';

import { robotList } from './data/robots';

const RobofriendsPage = () => {
  const [query, setQuery] = useState('');
  const [selectedRobot, setSelectedRobot] = useState(-1);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [robots, setRobots] = useState(robotList);

  const loadRobotUsers = () => {
    if (hasLoaded) return;
    const url = 'https://jsonplaceholder.typicode.com/users';

    let newRobots = [];
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        newRobots = [...robots];
        let maxCurrentRoboId = Math.max(...newRobots.map((robo) => robo.id));

        response.forEach((item) => {
          let tempRobo = {
            id: item.id + maxCurrentRoboId,
            name: item.name,
            email: item.email,
            description: item.company.catchPhrase,
          };
          newRobots.push(tempRobo);
        });
      })
      .then(() => setHasLoaded(true))
      .then(() => setRobots(newRobots))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadRobotUsers();
  }, []);

  const handleClick = (id) => {
    setSelectedRobot(id - 1);
  };

  const handleExit = () => {
    setSelectedRobot(-1);
  };

  return (
    <Layout>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <main className="flex flex-col items-center space-y-3 p-2 bg-gradient-to-tr from-green-400 to-blue-300 min-h-screen h-full">
          <Header />
          <Search query={query} setQuery={setQuery} />
          <Scroll>
            <RoboList query={query} robots={robots} handleClick={handleClick} />
            {selectedRobot >= 0 && (
              <RoboModal
                id={robots[selectedRobot].id}
                name={robots[selectedRobot].name}
                email={robots[selectedRobot].email}
                description={robots[selectedRobot].description}
                handleExit={handleExit}
              ></RoboModal>
            )}
          </Scroll>
        </main>
      </ErrorBoundary>
    </Layout>
  );
};

export default RobofriendsPage;
