'use client';

import { useState } from 'react';
import InputForm from './InputForm.component';
import ActiveItems from './ActiveItems.component';
import CompletedItems from './CompletedItems.component';

const ShoppingList = ({
  items,
  setItems,
  activeItems,
  setActiveItems,
  completedItems,
  setCompletedItems,
  handleDelete,
}) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.length) return;
    const newItem = {
      id: items.length + 1,
      text: text,
      dateCreated: Date.now(),
      dateCompleted: null,
      completedId: null,
    };
    setText('');
    setItems(items.concat(newItem));
  };

  const handleComplete = (id) => {
    const item = items.find((item) => item.id === id);
    item.dateCompleted = Date.now();
    item.completedId = completedItems.length + 1;
    setItems(
      items
        .filter((item) => item.id !== id)
        .concat(item)
        .sort((a, b) => a.dateCreated - b.dateCreated),
    );
    setActiveItems(
      activeItems.filter((item) => item.id !== id),
    );
    setCompletedItems(completedItems.concat(item));
  };

  const handleUncheck = (id) => {
    const item = items.find((item) => item.id === id);
    item.dateCompleted = null;
    item.completedId = null;
    setItems(
      items
        .filter((item) => item.id !== id)
        .concat(item)
        .sort((a, b) => a.dateCreated - b.dateCreated),
    );
    setActiveItems(activeItems.concat(item));
    setCompletedItems(
      completedItems.filter((item) => item.id !== id),
    );
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="z-[1000] h-screen w-screen pt-3">
      <h1 className="text-6xl font-bold mb-10 w-screen text-center ubuntu">
        Shopping List
      </h1>

      <div className="grid grid-cols-3">
        <InputForm
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
        />
        <div className="flex flex-col text-center w-[95%] h-[95%] p-10 m-3">
          <ActiveItems
            activeItems={activeItems}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        </div>
        <div className="flex flex-col text-center w-[95%] h-[95%] p-10 m-3">
          <CompletedItems
            completedItems={completedItems}
            handleUncheck={handleUncheck}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
