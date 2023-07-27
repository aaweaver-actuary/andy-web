'use client';

import { useState } from 'react';

import Layout from '../../../components/Layout.component';
import Search from './components//Search.component';
import Header from './components/Header.component';
import RoboList from './components/RoboList.component';
import RoboModal from './components/RoboModal.component';
import { robots } from './data/robots';

const RobofriendsPage = () => {
  const [query, setQuery] = useState('');
  const [selectedRobot, setSelectedRobot] = useState(null);

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
      </main>
    </Layout>
  );
};

export default RobofriendsPage;
