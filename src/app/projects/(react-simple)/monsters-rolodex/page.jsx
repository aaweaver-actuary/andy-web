'use client';

import { useState, useEffect } from 'react';

import Layout from '../../../components/Layout.component';

import CardList from './components/CardList.component';
import Search from './components/Search.component';
import Header from './components/Header.component';

const MonsterRolodexPage = () => {
  // initialize empty array of monsters
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchQuery, setSearchQuery] = useState('');

  const usersUrl = 'https://jsonplaceholder.typicode.com/users';

  // fetch users from API
  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((users) => setMonsters(users))
      .catch((err) => console.log(err));
  }, []);

  // handle search input
  const handleQueryTyping = (e) => {
    setSearchQuery(e.target.value);
  };

  // filter monsters by search query
  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchQuery.toLowerCase());
      }),
    );
  }, [monsters, searchQuery]);

  return (
    <Layout>
      <page className="flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-600">
        <Header title="Monster Rolodex" />
        <Search
          placeholder="Search Monsters"
          handleQueryTyping={handleQueryTyping}
          searchType="monster-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </page>
    </Layout>
  );
};

export default MonsterRolodexPage;
