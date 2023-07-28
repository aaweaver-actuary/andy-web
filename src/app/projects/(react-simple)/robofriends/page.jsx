'use client';

import { useEffect, useState } from 'react';

import Layout from '../../../components/Layout.component';
import Search from './components//Search.component';
import Header from './components/Header.component';
import RoboList from './components/RoboList.component';
import RoboModal from './components/RoboModal.component';
import { robotList } from './data/robots';
import Scroll from './components/Scroll.component';

const RobofriendsPage = () => {
  const [query, setQuery] = useState('');
  const [selectedRobot, setSelectedRobot] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [robots, setRobots] = useState(robotList);

  const loadRobotUsers = () => {
    if (hasLoaded) return;
    const url = 'https://jsonplaceholder.typicode.com/users';
    // let currentRobots = robots;
    // let currentRoboIds = [];
    // Object.keys(currentRobots).forEach((key) => {
    //   currentRoboIds.push(currentRobots[key].id);
    // });
    // const maxCurrentRoboId = Math.max(...currentRoboIds);
    let newRobots = [];
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
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

    // Object.keys(response).forEach((key) => {
    //   let tempRobo = {
    //     id: response[key].id + maxCurrentRoboId,
    //     name: response[key].name,
    //     email: response[key].email,
    //     description: response[key].company.catchPhrase,
    //   };

    //     currentRobots.push(tempRobo);
    //   });
    // });

    // setHasLoaded(true);

    // setRobots(newRobots);
  };

  useEffect(() => {
    loadRobotUsers();
  }, []);

  useEffect(() => {
    console.log('robots: ', robots);
  }, [robots]);

  const isSelected = (selectedRobot) => {
    return selectedRobot ? true : false;
  };

  const handleClick = (id) => {
    setSelectedRobot(id);
  };

  const handleExit = () => {
    setSelectedRobot(null);
  };

  return (
    <Layout>
      <main className="flex flex-col items-center space-y-3 p-2 bg-gradient-to-tr from-green-400 to-blue-300 min-h-screen h-full">
        <Header />
        <Search query={query} setQuery={setQuery} />
        <Scroll>
          <RoboList query={query} robots={robots} handleClick={handleClick} />
          {isSelected(selectedRobot) && (
            <RoboModal
              id={selectedRobot}
              name={robots[selectedRobot].name}
              email={robots[selectedRobot].email}
              description={robots[selectedRobot].description}
              handleExit={handleExit}
            >
              <h1>A MODAL.</h1>
            </RoboModal>
          )}
        </Scroll>
      </main>
    </Layout>
  );
};

export default RobofriendsPage;
