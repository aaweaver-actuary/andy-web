'use client';

import { useState, useEffect } from 'react';

import ShoppingList from '@/app/projects/shopping-list/components/ShoppingList.component';
import ConfirmDelete from '@/app/projects/shopping-list/components/ConfirmDelete.modal';

const ShoppingListApp = () => {
  const [items, setItems] = useState([]); // all items
  const [activeItems, setActiveItems] = useState([]); // active items [dateCompleted === null]
  const [completedItems, setCompletedItems] = useState([]); // completed items
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] =
    useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('items');
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    setActiveItems(
      items.filter((item) => !item.dateCompleted),
    );
    setCompletedItems(
      items.filter((item) => item.dateCompleted),
    );
    items.sort((a, b) => a.dateCreated - b.dateCreated);
    localStorage.setItem('items', JSON.stringify(items));
    console.log('items', items);
  }, [items]);

  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setIsConfirmDeleteOpen(true);
  };

  const handleDelete = (id) => {
    const item = items.find((item) => item.id === id);
    if (item.dateCompleted) {
      setCompletedItems(
        completedItems.filter((item) => item.id !== id),
      );
    } else {
      setActiveItems(
        activeItems.filter((item) => item.id !== id),
      );
    }
    setItems(items.filter((item) => item.id !== id));
  };

  const lookupNameFromId = (id) => {
    let x = items.find((item) => item.id === id);
    return x.text;
  };
  return (
    <>
      <ShoppingList
        items={items}
        setItems={setItems}
        activeItems={activeItems}
        setActiveItems={setActiveItems}
        completedItems={completedItems}
        setCompletedItems={setCompletedItems}
        handleDelete={handleDeleteClick}
      />
      {isConfirmDeleteOpen && (
        <ConfirmDelete
          isConfirmDeleteOpen={isConfirmDeleteOpen}
          setIsConfirmDeleteOpen={setIsConfirmDeleteOpen}
          handleDelete={handleDelete}
          itemToDelete={itemToDelete}
          lookupNameFromId={lookupNameFromId}
        />
      )}
    </>
  );
};

export default ShoppingListApp;
